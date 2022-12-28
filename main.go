package main

import (
	"fmt"
	"log"
	"os"

	Posts "lucasgouvea-backend/internal/api/posts"

	Database "lucasgouvea-backend/internal/database"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	args := os.Args
	fmt.Printf("args: %v\n", args)

	Database.Start()

	if len(args) > 1 && args[1] == "migrations:up" {
		models := []any{&Posts.Keyword{}, &Posts.Post{}}
		Database.Migrate(models)
		return
	}

	if len(args) > 1 && args[1] == "migrations:down" {
		tables := []string{"keywords", "posts", "post_keywords"}
		Database.Drop(tables)
		return
	}

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	router := gin.Default()

	v1Router := router.Group("/v1")

	Posts.Start(v1Router)

	router.Run("0.0.0.0:8080")
}
