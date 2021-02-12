import styles from './Status.module.css'

const Status = ({artist, track, release}) => {
  if (!artist) {
    return (
      <div className={styles.info}>
        <div className="status">
          <div className={styles.track}>Play now!</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.info}>
      <span className={styles.release}>{release.title}</span>
      <h1 className={styles.track}>{track.title}</h1>
      <small className={styles.artist}>{artist.name}</small>
    </div>
  )
}

export default Status