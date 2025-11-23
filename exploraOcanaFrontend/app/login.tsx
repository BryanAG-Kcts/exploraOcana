import { Link } from 'expo-router'
import { ArrowLeft, ScrollTextIcon } from 'lucide-react-native'
import { View } from 'react-native'
import { SafeLayout } from '@/components/layouts/safeLayout'
import { Form } from '@/components/pages/login/form'
import { Heading } from '@/components/ui/heading'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'

export default function Login() {
  return (
    <SafeLayout>
      <View className='gap-7 flex-1'>
        <Link dismissTo href='/'>
          <Icon size='2xl' as={ArrowLeft} />
        </Link>

        <View className='items-center pt-10 flex-1 gap-2'>
          <View className='rounded-full p-5 bg-success-50 mb-7'>
            <Icon size='4xl' className='text-success-500' as={ScrollTextIcon} />
          </View>

          <Heading size='2xl'>Bienvenido de nuevo</Heading>
          <Text>Descubre la historia que nos une</Text>
          <Form />
        </View>
      </View>
    </SafeLayout>
  )
}
