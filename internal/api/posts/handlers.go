package posts

import (
	Database "lucasgouvea-backend/internal/database"

	Shared "lucasgouvea-backend/internal/shared"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

func GetPosts(context *gin.Context) {
	var posts = []PostSchema{}
	var models = []Post{}
	db := Database.GetDB()
	models, err := FindPosts(db)

	if err != nil {
		panic(err)
	}

	for _, model := range models {
		posts = append(posts, NewPostSchema(model, Shared.GetLanguage(context)))
	}

	response := Shared.NewResponse(posts)
	response.Send(context, 200)
}

func PostPost(context *gin.Context) {
	var post = Post{}
	db := Database.GetDB()

	if err := context.ShouldBindWith(&post, binding.JSON); err != nil {
		panic(err)
	}

	if err := CreatePost(db, post); err != nil {
		panic(err)
	}

	response := Shared.NewResponse([]Post{post})
	response.Send(context, 200)
}
