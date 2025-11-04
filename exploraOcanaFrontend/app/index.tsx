import { ImageBackground, Text } from 'react-native'

export default function Index() {
  return (
    <ImageBackground
      className='h-full'
      source={require('../assets/adaptive-icon.png')}
    >
      <Text>Hello, World!</Text>
    </ImageBackground>
  )
}
