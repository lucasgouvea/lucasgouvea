const ENVIRONMENT = {
    PROD: "PROD",
    DEV: "DEV"
}

export function getBaseUrl() {
    if (process.env.ENVIRONMENT = ENVIRONMENT.DEV) {
        return 'http://localhost:8080'
    }

    if (process.env.ENVIRONMENT = ENVIRONMENT.PROD) {
        return 'https://api.lucasgouvea.com'
    }

    throw new Error(`Unsupported ENVIRONMENT ${process.env.ENVIRONMENT}`)
}
