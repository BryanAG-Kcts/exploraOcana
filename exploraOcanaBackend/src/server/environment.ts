import 'dotenv/config'

export const environment = {
  postgresUrl: process.env.POSTGRES_URL || '',
  port: process.env.PORT || 3000,
  saltRounds: Number(process.env.SALT_ROUNDS) || 10
}
