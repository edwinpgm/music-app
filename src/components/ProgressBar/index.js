import styles from './ProgressBar.module.css'

const ProgressBar = () => {
  return (
    <>
      <div className={styles.container}>
        <span className="elapsed">0:00</span>
        <div className={styles.progressBar}>
          <div className={`${styles.progress} progress`}></div>
        </div>
        <span className="duration">0:00</span>
      </div>
    </>
  )
}

export default ProgressBar