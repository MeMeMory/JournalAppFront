import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from './field.interface'
import style from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
  ({ id, label, error, className, type = 'text', Icon, ...rest }, ref) => {
    return (
      <div className={cn('', className, style.group)}>
        {Icon && <Icon />}
        <input
          ref={ref}
          type={type}
          className={error && style.input_error}
          {...rest}
          placeholder=''
          id={`#${id}`}
        />
        <label htmlFor={label}>{label}</label>
        {error && <div className={style.field_error}>{error}</div>}
      </div>
    )
  }
)

Field.displayName = 'Field'

export default Field
