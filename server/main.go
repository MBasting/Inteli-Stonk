package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	routes "smartstock.com/routes"
)

func main() {

	e := echo.New() //HTTP server

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"}, //Allows requests from his port.
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	}))

	e.GET("/", routes.GetHomePage)
	e.GET("/stock", routes.GetStockPage)

	e.Logger.Fatal(e.Start(":8080")) //Launches the HTTP server

}
