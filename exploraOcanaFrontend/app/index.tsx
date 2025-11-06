import { useRouter } from 'expo-router'
import { ImageBackground, View } from 'react-native'
import { SafeLayout } from '@/components/layouts/safeLayout'
import { Button, ButtonText } from '@/components/ui/button'
import { Center } from '@/components/ui/center'
import { Heading } from '@/components/ui/heading'

export default function Index() {
  const router = useRouter()

  const handleRegisterPress = () => {
    router.push('/register')
  }

  const handleLoginPress = () => {
    router.push('/login')
  }

  return (
    <ImageBackground
      className='h-full'
      source={require('../assets/tower-slaves.jpg')}
    >
      <SafeLayout sizes='sm'>
        <Center className='h-full gap-7'>
          <Heading size='3xl' className='text-white text-center'>
            Ocaña: Un viaje en el tiempo
          </Heading>

          <View className='w-full gap-4'>
            <Button
              size='xl'
              action='secondary'
              className='w-full'
              onPress={handleLoginPress}
            >
              <ButtonText>Inicia sesión</ButtonText>
            </Button>
            <Button size='xl' className='w-full' onPress={handleRegisterPress}>
              <ButtonText>Crea tu cuenta</ButtonText>
            </Button>
          </View>
        </Center>
      </SafeLayout>
    </ImageBackground>
  )
}
