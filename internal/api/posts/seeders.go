package posts

import Database "lucasgouvea-backend/internal/database"

const description_pt_br = "Olá, me chamo Lucas Gouvea, e sou um Engenheiro de Software. Estou atuando na indústria há 4 anos. Além de tecnologia, eu gosto de ler livros de desenvolvimento pessoal, filosofia, e economia."
const description_en_us = "Hello there, my name is Lucas Gouvea, and I'm a Software Engineer. I've been working in the industry for 4 years. Besides technology, I enjoy reading books on themes like self-development, philosophy, and economics."

func Seed() {
	db := Database.GetDB()
	lucas_gouvea := LucasGouvea{Description_pt_br: description_pt_br, Description_en_us: description_en_us}
	if err := db.Create(&lucas_gouvea).Error; err != nil {
		panic(err)
	}
}
