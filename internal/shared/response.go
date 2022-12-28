package shared

import (
	"os"

	"github.com/gin-gonic/gin"
)

type IResponse[T any] interface {
	Send(context *gin.Context, status int)
}

type Response[T any] struct {
	Data []T `json:"data"`
}

func (response Response[T]) Send(context *gin.Context, status int) {
	if os.Getenv("ENVIRONMENT") != "PRODUCTION" {
		context.IndentedJSON(status, response)
	} else {
		context.JSON(status, response)
	}
}

func NewResponse[T any](schemas []T) IResponse[T] {
	response := new(Response[T])
	response.Data = schemas
	return *response
}
