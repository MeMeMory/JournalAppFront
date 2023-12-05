import { FC } from 'react'

import styles from './UserItem.module.scss'
import { IUser } from '@/types/user.interface'

type User = {
  user: IUser
}

const UserItem: FC<User> = ({ user }) => {
  console.log(user)

  return (
    <div className={styles.d}>
      <div></div>
    </div>
  )
}

export default UserItem
