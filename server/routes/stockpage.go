package routes

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"
)

// Request to get Stock Info:  http://localhost:8080/stock?name=AAPL&outputsize=compact&interval=30min
// Request data:
// - name => Stock Symbol
// - outputSize => Compact (last 100 points) or full (all)
// - interval => 1min, 5min, 15min, 30min, 60min, or any other string for Daily
func GetStockPage(c echo.Context) error {
	log.Println(c.Request().URL)
	stockName := c.QueryParam("name")
	interval := c.QueryParam("interval")
	output := c.QueryParam("outputsize")

	// TODO: Either include this in the Context body or define it somewhere more centrally
	const APIkey string = "7LMSYRQ2DGS73TRF"
	var function string = ""
	var intervalf string = ""

	if !(strings.Contains(interval, "min")) {
		function = "TIME_SERIES_DAILY"
		intervalf = ""
	} else {
		function = "TIME_SERIES_INTRADAY"
		intervalf = fmt.Sprintf("&interval=%s", interval)
	}

	fmt.Println("Stock request is:", stockName, function, interval, output)

	requestURL := fmt.Sprintf("https://www.alphavantage.co/query?function=%s&symbol=%s&outputsize=%s%s&apikey=%s", function, stockName, output, intervalf, APIkey)
	fmt.Println("RequestURL: ", requestURL)

	req, error := http.Get(requestURL)
	if error != nil {
		fmt.Println("Error is req: ", error)
		return error
	}
	responseData, err := ioutil.ReadAll(req.Body)
	if err != nil || strings.Contains(string(responseData), "Error Message") {
		fmt.Println("An error occurred, most likely due to symbol not occuring in API, full response: ", string(responseData))
		return c.String(http.StatusBadRequest, string(responseData))
	}
	return c.String(http.StatusOK, string(responseData))
}
