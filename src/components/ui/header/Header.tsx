import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.nav_list}>
          <Link className={styles.nav_item} to='/'>
            Home
          </Link>
          <Link className={styles.nav_item} to='/Cart'>
            Cart
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
