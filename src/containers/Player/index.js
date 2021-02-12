import React from 'react'
import Feed from 'feed-media-audio-player'
import Container from '../../components/Container'
import Control from '../../components/Control'
import ProgressBar from '../../components/ProgressBar'
import Status from '../../components/Status'

const Player = () => {
  const node = React.useRef()
  const player = new Feed.Player('demo', 'demo')
  const [song, setSong] = React.useState({})
  
  React.useEffect(() => {
    new Feed.PlayerView(node.current, player)
  }, [])
  
  player.tune()
  player.on('play-started', (event) => {
    setSong(event.audio_file)
  })

  return (
    <div ref={node}>
      <Container>
        <Status {...song} />
        <ProgressBar />
        <Control />
      </Container>
    </div>
  )
}

export default Player