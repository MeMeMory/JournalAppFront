import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'orange' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  size = 'md',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(styles.btn, styles[variant], styles[size], className)}
    >
      {children}
    </button>
  )
}

// const variant: styleType = {
//   orange: 'text-white bg-primary hover:bg-primary/80',
//   white: 'text-primary bg-white hover:bg-white/80'
// }

export default Button
