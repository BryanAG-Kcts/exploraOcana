import { View } from 'react-native'
import { SafeLayout } from '@/components/layouts/safeLayout'
import { Button, ButtonIcon } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { ArrowLeftIcon } from '@/components/ui/icon'

export default function Register() {
  return (
    <SafeLayout>
      <View className='flex-row'>
        <Button size='xl' variant='link'>
          <ButtonIcon as={ArrowLeftIcon} />
        </Button>
      </View>

      <Heading size='2xl'>Crea tu cuenta</Heading>
    </SafeLayout>
  )
}
