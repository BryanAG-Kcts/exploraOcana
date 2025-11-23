import type { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const className = {
  sm: 'max-w-sm',
  none: ''
}

interface Props {
  children: ReactNode
  sizes?: keyof typeof className
}
export function SafeLayout({ children, sizes = 'none' }: Props) {
  return (
    <SafeAreaView
      className={`${className[sizes]} mx-auto p-4 w-full flex-1 bg-background-0`}
    >
      {children}
    </SafeAreaView>
  )
}
