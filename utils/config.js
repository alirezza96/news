import "dotenv/config"

const config = {
    server: {
        port:process.env.SERVER_PORT
    },
    telegram: {
        token:process.env.TELEGRAM_TOKEN
    }
}

export default config