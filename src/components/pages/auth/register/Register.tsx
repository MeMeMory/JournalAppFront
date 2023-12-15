import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useAction'

import { validEmail } from '../valid-email'

const register: FC = () => {
  const { register } = useActions()

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IEmailPassword>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IEmailPassword> = data => {
    register(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        {...formRegister('email', {
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Please enter valid email'
          }
        })}
        id='registerEmail'
        label='Email'
        error={errors.email?.message}
      />
      <Field
        {...formRegister('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Min length 6 symbols'
          },
          validate: value =>
            /^[a-zA-Z0-9]*$/.test(value) || 'Only numbers and letters'
        })}
        type='password'
        id='registerPassword'
        label='Password'
        error={errors.password?.message}
      />
      <Button type='submit' variant='orange' size='sm'>
        Register
      </Button>
    </form>
  )
}

export default register
