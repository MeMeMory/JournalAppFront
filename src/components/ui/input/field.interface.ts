import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  Icon?: IconType
  error?: string
  styles?: string
}
