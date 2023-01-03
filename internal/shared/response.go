package shared

import (
	"github.com/gin-gonic/gin"
)

type IResponse[T any] interface {
	Send(context *gin.Context, status int)
}

type Response[T any] struct {
	Data []T `json:"data"`
}

func (response Response[T]) Send(context *gin.Context, status int) {
	if GetEnvVars().GO_ENV != GetGoEnv().PROD {
		context.IndentedJSON(status, response)
	} else {
		context.JSON(status, response)
	}
}

func NewResponse[T any](models []T) IResponse[T] {
	response := new(Response[T])
	response.Data = models
	return *response
}
