import { Link } from 'expo-router'
import { LockIcon, MailIcon } from 'lucide-react-native'
import { useState } from 'react'
import { View } from 'react-native'
import * as z from 'zod'
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { defaultLoginErrors, LoginFormValidator } from '@/constants/pages/login'
import { FormInput } from '../global/formInput'

export function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(defaultLoginErrors)

  async function submit() {
    const { success, data, error } = await LoginFormValidator.safeParseAsync({
      email,
      password
    })

    if (!success) {
      const errorMessages = z.flattenError(error)
      setErrors({
        email: Boolean(errorMessages.fieldErrors.email),
        password: Boolean(errorMessages.fieldErrors.password)
      })

      return
    }

    setErrors(defaultLoginErrors)
    console.log('Form data is valid:', data)
  }

  return (
    <View className='w-full gap-5 flex-1 pt-10'>
      <View className='gap-5 flex-1'>
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
      </View>

      <Button size='xl' action='positive' onPress={submit}>
        <ButtonText>Iniciar sesión</ButtonText>
      </Button>

      <Text className='text-center'>
        ¿Aún no tienes una cuenta?{' '}
        <Link
          href='/register'
          dismissTo
          className='text-success-300 font-semibold underline'
        >
          Regístrate
        </Link>
      </Text>
    </View>
  )
}
