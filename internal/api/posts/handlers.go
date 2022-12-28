package posts

import (
	Database "lucasgouvea-backend/internal/database"

	Shared "lucasgouvea-backend/internal/shared"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

func GetPosts(context *gin.Context) {
	var schemas = []PostSchema{}
	db := Database.GetDB()
	posts, err := FindPosts(db)

	if err != nil {
		panic(err)
	}

	for _, post := range posts {
		schemas = append(schemas, NewPostSchema(post))
	}

	response := Shared.NewResponse(schemas)
	response.Send(context, 200)
}

func PostPost(context *gin.Context) {
	var schemas = []PostCreateSchema{}
	var postCreateSchema PostCreateSchema
	var model *Post
	var keywords []Keyword
	db := Database.GetDB()

	if err := context.ShouldBindWith(&postCreateSchema, binding.JSON); err != nil {
		panic(err)
	}

	for _, keyword := range postCreateSchema.Keywords {
		keywords = append(keywords, Keyword{Description: keyword})
	}

	model = NewPost(postCreateSchema)
	if err := CreatePost(db, *model, keywords); err != nil {
		panic(err)
	}

	schemas = append(schemas, postCreateSchema)
	response := Shared.NewResponse(schemas)
	response.Send(context, 200)
}
