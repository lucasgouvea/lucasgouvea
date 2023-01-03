package shared

import "os"

// Constants for environment
type GoEnv struct {
	PROD string
	DEV  string
}

// Env var data
type Env struct {
	DB_USER     string
	DB_PASSWORD string
	DB_NAME     string
	GO_ENV      string
}

func GetGoEnv() GoEnv {
	return GoEnv{
		PROD: "prod",
		DEV:  "dev",
	}
}

func GetEnvVars() Env {
	return Env{
		DB_USER:     os.Getenv("DB_USER"),
		DB_PASSWORD: os.Getenv("DB_PASSWORD"),
		DB_NAME:     os.Getenv("DB_NAME"),
		GO_ENV:      os.Getenv("GO_ENV"),
	}
}
