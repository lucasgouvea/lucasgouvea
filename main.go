package main

import (
	"fmt"
	"os"

	Posts "lucasgouvea-backend/internal/api/posts"

	Database "lucasgouvea-backend/internal/database"

	Shared "lucasgouvea-backend/internal/shared"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {

	args := os.Args
	fmt.Printf("Execution args: %v\n", args)

	if Shared.GetEnvVars().GO_ENV != Shared.GetGoEnv().PROD {
		fmt.Printf("Loading .env")
		if err := godotenv.Load(); err != nil {
			panic(err)
		}
	}

	Database.Start()

	if len(args) > 1 && args[1] == "migrations:up" {
		models := []any{&Posts.Keyword{}, &Posts.Post{}, &Posts.LucasGouvea{}}
		Database.Migrate(models)
		Posts.Seed()
		return
	}

	if len(args) > 1 && args[1] == "migrations:down" {
		tables := []string{"keywords", "posts", "post_keywords", "lucas_gouvea"}
		Database.Drop(tables)
		return
	}

	router := gin.Default()

	v1Router := router.Group("/v1")

	Posts.Start(v1Router)

	router.Run("0.0.0.0:8080")
}
