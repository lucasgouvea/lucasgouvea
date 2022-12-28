package posts

import (
	"time"
)

type Keyword struct {
	ID          uint `gorm:"primarykey"`
	CreatedAt   time.Time
	Description string `gorm:"unique"`
}

type Post struct {
	ID        uint `gorm:"primarykey"`
	CreatedAt time.Time
	Title     string
	Text      string
	Keywords  []Keyword `gorm:"many2many:post_keywords;"`
}

func NewPost(postCreateSchema PostCreateSchema) *Post {
	model := new(Post)
	model.CreatedAt = time.Now()
	model.Title = postCreateSchema.Title
	model.Text = postCreateSchema.Text

	return model
}
