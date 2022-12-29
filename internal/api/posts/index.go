package posts

import "github.com/gin-gonic/gin"

func Start(router *gin.RouterGroup) {
	router.GET("/posts", GetPosts)
	router.GET("/lucasgouvea", GetLucasGouvea)
	router.POST("/posts", PostPost)
}
