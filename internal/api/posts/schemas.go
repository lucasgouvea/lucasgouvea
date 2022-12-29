package posts

import "time"

type PostSchema struct {
	CreatedAt time.Time `json:"created_at"`
	Title     string    `json:"title"`
	Text      string    `json:"text"`
	Keywords  []string  `json:"keywords"`
}

type LucasGouveaSchema struct {
	Description string `json:"description"`
}

const (
	pt_BR string = "pt_BR"
	en_US        = "en_US"
)

func NewPostSchema(model Post, language string) PostSchema {
	schema := new(PostSchema)
	schema.CreatedAt = model.CreatedAt

	if language == en_US {
		schema.Title = model.Title_en_us
		schema.Text = model.Text_en_us
		schema.Keywords = []string{}

		for _, keyword := range model.Keywords {
			schema.Keywords = append(schema.Keywords, keyword.Description_en_us)
		}

		return *schema
	}

	if language == pt_BR {
		schema.Title = model.Title_pt_br
		schema.Text = model.Text_pt_br
		schema.Keywords = []string{}

		for _, keyword := range model.Keywords {
			schema.Keywords = append(schema.Keywords, keyword.Description_pt_br)
		}

		return *schema
	}

	panic("Unsupported language")
}

func NewLucasGouveaSchema(model LucasGouvea, language string) LucasGouveaSchema {
	schema := new(LucasGouveaSchema)

	if language == en_US {
		schema.Description = model.Description_en_us
		return *schema
	}

	if language == pt_BR {
		schema.Description = model.Description_pt_br
		return *schema
	}

	panic("Unsupported language")
}
