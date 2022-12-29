package posts

import (
	"time"
)

type Keyword struct {
	ID                uint `gorm:"primarykey"`
	CreatedAt         time.Time
	Description_pt_br string `gorm:"index:,unique,composite:description"`
	Description_en_us string `gorm:"index:,unique,composite:description"`
}

type Post struct {
	ID          uint `gorm:"primarykey"`
	CreatedAt   time.Time
	Title_pt_br string
	Title_en_us string
	Text_pt_br  string
	Text_en_us  string
	Keywords    []Keyword `gorm:"many2many:post_keywords;"`
}

type LucasGouvea struct {
	ID                uint `gorm:"primarykey"`
	CreatedAt         time.Time
	Description_pt_br string
	Description_en_us string
}

type Tabler interface {
	TableName() string
}

func (LucasGouvea) TableName() string {
	return "lucas_gouvea"
}
