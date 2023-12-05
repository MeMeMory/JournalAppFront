import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <svg
        fill='none'
        className={styles.circle_svg}
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle className='circle' cx='50' cy='50' r='45' />
      </svg>
    </div>
  )
}

export default Loader
