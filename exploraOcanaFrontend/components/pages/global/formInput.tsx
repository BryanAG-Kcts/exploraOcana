import { AlertCircleIcon, EyeIcon, EyeOffIcon } from 'lucide-react-native'
import { useState } from 'react'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText
} from '@/components/ui/form-control'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'

interface Props {
  label: string
  inputType?: 'text' | 'password'
  placeholder: string
  value: string
  setValue: (value: string) => void
  errorText: string
  icon: typeof AlertCircleIcon
  isInValid?: boolean
}
export function FormInput({
  label,
  inputType = 'text',
  placeholder,
  value,
  setValue,
  errorText,
  icon,
  isInValid = false
}: Props) {
  const [showPassword, setShowPassword] = useState(inputType === 'text')

  return (
    <FormControl isInvalid={isInValid}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>

      <Input size='xl'>
        <InputSlot className='pl-3'>
          <InputIcon as={icon} />
        </InputSlot>

        <InputField
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
        />

        {inputType === 'password' && (
          <InputSlot
            className='pr-3'
            onPress={() => setShowPassword(!showPassword)}
          >
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
          </InputSlot>
        )}
      </Input>

      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} className='text-red-500' />
        <FormControlErrorText className='text-red-500'>
          {errorText}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
