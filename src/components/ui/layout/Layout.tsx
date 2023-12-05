import { FC, PropsWithChildren } from 'react'

import Header from '../header/Header'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children
}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  )
}

export default Layout
