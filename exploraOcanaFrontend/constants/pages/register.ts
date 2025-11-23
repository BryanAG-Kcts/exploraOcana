import * as z from 'zod'

export const RegisterFormValidator = z
  .object({
    username: z.string().min(3),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
  })
  .refine(data => data.password === data.confirmPassword)

export const defaultRegisterErrors = {
  username: false,
  email: false,
  password: false,
  confirmPassword: false,
  equalPasswords: false
}
