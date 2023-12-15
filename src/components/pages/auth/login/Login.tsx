import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useAction'

import { validEmail } from '../valid-email'

import { getAccessToken } from '@/services/auth/auth.helper'

const login: FC = () => {
  const { login } = useActions()
  const navigate = useNavigate()
  const [isGood, setIsGood] = useState(true)

  const {
    register: formLogin,
    handleSubmit,
    formState: { errors }
  } = useForm<IEmailPassword>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IEmailPassword> = async data => {
    await login(data)

    const accessToken = getAccessToken()
    if (!accessToken) {
      toast.error('Check your data', {
        position: toast.POSITION.TOP_RIGHT
      })
    }

    toast.success('Welcome', {
      position: toast.POSITION.TOP_RIGHT
    })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        {...formLogin('email', {
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Please enter valid email'
          }
        })}
        id='loginEmail'
        label='Email'
        error={errors.email?.message}
      />
      <Field
        {...formLogin('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Min length 6 numbs'
          },
          validate: value =>
            /^[a-zA-Z0-9]*$/.test(value) || 'Only numbers and letters'
        })}
        type='password'
        id='loginPassword'
        label='Password'
        error={errors.password?.message}
      />
      <Button type='submit' variant='orange' size='sm'>
        Login
      </Button>
    </form>
  )
}

export default login
