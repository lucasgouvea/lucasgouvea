package posts

import (
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

func FindPosts(db *gorm.DB) ([]Post, error) {
	var posts []Post
	err := db.Model(&Post{}).Preload("Keywords").Find(&posts).Error

	return posts, err
}

func CreatePost(db *gorm.DB, post Post) error {
	var err error

	tx := db.Begin()

	if err := tx.Clauses(clause.OnConflict{
		Columns:   []clause.Column{{Name: "description_pt_br"}, {Name: "description_en_us"}},
		UpdateAll: true,
	}).Save(&post.Keywords).Error; err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Omit("Keywords").Create(&post).Error; err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Model(&post).Association("Keywords").Append(post.Keywords); err != nil {
		tx.Rollback()
		return err
	}

	tx.Commit()

	return err
}
