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

func CreatePost(db *gorm.DB, post Post, keywords []Keyword) error {
	var err error

	tx := db.Begin()

	if err := tx.Clauses(clause.OnConflict{
		Columns:   []clause.Column{{Name: "description"}},
		UpdateAll: true,
	}).Save(&keywords).Error; err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Create(&post).Error; err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Model(&post).Association("Keywords").Append(keywords); err != nil {
		tx.Rollback()
		return err
	}

	tx.Commit()

	return err
}
