import * as z from 'zod'

export const LoginFormValidator = z.object({
  email: z.email(),
  password: z.string().min(8)
})

export const defaultLoginErrors = {
  email: false,
  password: false
}
