import { FC, useState } from 'react'

import Layout from '@/ui/layout/Layout'

import styles from './auth.module.scss'
import Login from './login/Login'
import Register from './register/Register'

const auth: FC = () => {
  const [isActive, setIsActive] = useState('login')

  const tabClick = (tab: string) => {
    setIsActive(tab)
  }

  // const { checkAuth, logout } = useActions()
  // const ur = checkAuth()
  // console.log(ur)

  return (
    <Layout>
      <div className={styles.auth}>
        <div className={styles.form_group}>
          <div className={styles.auth_title}>
            <div
              className={isActive === 'login' ? styles.active : ''}
              onClick={() => tabClick('login')}
            >
              <h3>Login</h3>
            </div>
            <div
              className={isActive === 'register' ? styles.active : ''}
              onClick={() => tabClick('register')}
            >
              <h3>Register</h3>
            </div>
          </div>
          {isActive === 'login' ? <Login /> : <Register />}
        </div>
      </div>
    </Layout>
  )
}

export default auth
