import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import '@/global.css'

export default function App() {
  return (
    <GluestackUIProvider mode='light'>
      <StatusBar style='auto' />
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </GluestackUIProvider>
  )
}
