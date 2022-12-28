package posts

import "time"

type PostSchema struct {
	CreatedAt time.Time `json:"created_at"`
	Title     string    `json:"title"`
	Text      string    `json:"text"`
	Keywords  []string  `json:"keywords"`
}

type PostCreateSchema struct {
	Title    string   `json:"title"`
	Text     string   `json:"text"`
	Keywords []string `json:"keywords"`
}

func NewPostSchema(model Post) PostSchema {
	schema := new(PostSchema)
	schema.CreatedAt = model.CreatedAt
	schema.Title = model.Title
	schema.Text = model.Text
	schema.Keywords = []string{}

	for _, keyword := range model.Keywords {
		schema.Keywords = append(schema.Keywords, keyword.Description)
	}

	return *schema
}
