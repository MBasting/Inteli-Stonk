package routes

import (
	"errors"
	"fmt"
	"log"

	"github.com/labstack/echo/v4"
)

//Temporary for now
func GetHomePage(c echo.Context) error {
	log.Println(c.Request().URL)
	if c.Request().URL.Path != "/" {
		return errors.New("error")

	}

	fmt.Printf("%s\n", "testing")
	return nil
}
