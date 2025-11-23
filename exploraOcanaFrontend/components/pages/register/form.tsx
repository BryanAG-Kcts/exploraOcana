import { Link } from 'expo-router'
import { LockIcon, MailIcon, User2Icon } from 'lucide-react-native'
import { useState } from 'react'
import { View } from 'react-native'
import * as z from 'zod'
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import {
  defaultRegisterErrors,
  RegisterFormValidator
} from '@/constants/pages/register'
import { FormInput } from '../global/formInput'

export function Form() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState(defaultRegisterErrors)

  async function submit() {
    const { success, data, error } = await RegisterFormValidator.safeParseAsync(
      {
        username,
        email,
        password,
        confirmPassword
      }
    )

    if (!success) {
      const errorMessages = z.flattenError(error)
      setErrors({
        username: Boolean(errorMessages.fieldErrors.username),
        email: Boolean(errorMessages.fieldErrors.email),
        password: Boolean(errorMessages.fieldErrors.password),
        confirmPassword: Boolean(errorMessages.fieldErrors.confirmPassword),
        equalPasswords: Boolean(errorMessages.formErrors.length)
      })

      return
    }

    setErrors(defaultRegisterErrors)
    console.log('Form data is valid:', data)
  }

  return (
    <View className='w-full gap-5 flex-1 pt-10'>
      <View className='gap-5 flex-1'>
        <FormInput
          label='Nombre de usuario'
          placeholder='Ingresa tu nombre de usuario'
          value={username}
          setValue={setUsername}
          errorText='El nombre de usuario debe tener al menos 3 caracteres'
          icon={User2Icon}
          isInValid={errors.username}
        />

        <FormInput
          label='Corro electrónico'
          placeholder='Ingresa tu correo electrónico'
          value={email}
          setValue={setEmail}
          errorText='El correo electrónico no es válido'
          icon={MailIcon}
          isInValid={errors.email}
        />

        <FormInput
          label='Contraseña'
          placeholder='Ingresa tu contraseña'
          value={password}
          setValue={setPassword}
          errorText='La contraseña debe tener al menos 8 caracteres'
          icon={LockIcon}
          inputType='password'
          isInValid={errors.password}
        />

        <FormInput
          label='Confirmar contraseña'
          placeholder='Repite tu contraseña'
          value={confirmPassword}
          setValue={setConfirmPassword}
          errorText='Las contraseñas no coinciden'
          icon={LockIcon}
          inputType='password'
          isInValid={errors.confirmPassword || errors.equalPasswords}
        />
      </View>

      <Button size='xl' action='positive' onPress={submit}>
        <ButtonText>Registrase</ButtonText>
      </Button>

      <Text className='text-center'>
        ¿Ya tienes una cuenta?{' '}
        <Link
          href='/login'
          dismissTo
          className='text-success-300 font-semibold underline'
        >
          Inicia sesión
        </Link>
      </Text>
    </View>
  )
}
