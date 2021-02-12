import Button from '@material-ui/core/Button'
import { PlayArrow, Pause, SkipNext } from '@material-ui/icons'
import styles from './Control.module.css'

const ProgressBar = () => {
  return (
    <div className={styles.controls}>
      <Button role="pause" className="pause-button">
        <Pause style={{color: "white"}} />
      </Button>
      <Button role="play" className="play-button">
        <PlayArrow style={{color: "white"}} />
      </Button>
      <Button role="skip" className="skip-button">
        <SkipNext style={{color: "white"}} />
      </Button>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}

export default ProgressBar