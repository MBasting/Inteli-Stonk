package routes

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"
)

// Request to get Stock Info:  http://localhost:8080/stock?name=APL
func GetStockPage(c echo.Context) error {
	log.Println(c.Request().URL)
	stockName := c.QueryParam("name")
	fmt.Println("Stock name request is:", stockName)

	// TODO: Either include this in the Context body or define it somewhere more centrally
	const APIkey string = "...."

	requestURL := fmt.Sprintf("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=%s&interval=5min&apikey=%s", stockName, APIkey)
	fmt.Println("RequestURL:    ", requestURL)

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
