package posts

import (
	Database "lucasgouvea-backend/internal/database"
	"strconv"

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

func PatchPost(context *gin.Context) {
	var id uint64
	var err error

	if id, err = strconv.ParseUint(context.Param("id"), 10, 32); err != nil {
		panic(err)
	}

	var post = Post{ID: uint(id)}
	db := Database.GetDB()

	if err := context.ShouldBindBodyWith(&post, binding.JSON); err != nil {
		panic(err)
	}

	if err := UpdatePost(db, post); err != nil {
		panic(err)
	}

	response := Shared.NewResponse([]Post{post})
	response.Send(context, 200)
}

func GetLucasGouvea(context *gin.Context) {
	db := Database.GetDB()

	model, err := FindLucasGouvea(db)

	schema := NewLucasGouveaSchema(model, Shared.GetLanguage(context))

	if err != nil {
		panic(err)
	}

	response := Shared.NewResponse([]LucasGouveaSchema{schema})
	response.Send(context, 200)
}
