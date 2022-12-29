package shared

import "github.com/gin-gonic/gin"

func GetLanguage(context *gin.Context) string {
	return context.Request.Header.Get("Accept-Language")
}
