import { useRouter } from 'expo-router'
import { ImageBackground, View } from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import { Center } from '@/components/ui/center'
import { Heading } from '@/components/ui/heading'
import towerSlaves from '../assets/tower-slaves.jpg'

export default function Index() {
  const router = useRouter()

  const handleRegisterPress = () => {
    router.push('/register')
  }

  const handleLoginPress = () => {
    router.push('/login')
  }

  return (
    <ImageBackground className='h-full flex-1' source={towerSlaves}>
      <Center className='h-full gap-7 max-w-sm mx-auto w-full'>
        <Heading size='3xl' className='text-white text-center'>
          Ocaña: Un viaje en el tiempo
        </Heading>

        <View className='w-full gap-4'>
          <Button
            size='xl'
            action='positive'
            className='w-full'
            onPress={handleLoginPress}
          >
            <ButtonText>Inicia sesión</ButtonText>
          </Button>

          <Button
            size='xl'
            action='secondary'
            className='w-full'
            onPress={handleRegisterPress}
          >
            <ButtonText>Crea tu cuenta</ButtonText>
          </Button>
        </View>
      </Center>
    </ImageBackground>
  )
}
