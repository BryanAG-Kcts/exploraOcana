import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import '@/global.css'

export default function App() {
  return (
    <GluestackUIProvider mode='system'>
      <StatusBar style='auto' />
      <Slot />
    </GluestackUIProvider>
  )
}
