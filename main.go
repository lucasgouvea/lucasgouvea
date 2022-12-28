package main

import (
	"log"

	Posts "lucasgouvea-backend/internal/api/posts"

	Database "lucasgouvea-backend/internal/database"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	tables := []string{"keywords", "posts", "post_keywords"}
	models := []any{&Posts.Keyword{}, &Posts.Post{}}

	Database.Drop(tables)
	Database.Migrate(models)

	router := gin.Default()

	v1Router := router.Group("/v1")

	Posts.Start(v1Router)

	router.Run("localhost:8080")
}
