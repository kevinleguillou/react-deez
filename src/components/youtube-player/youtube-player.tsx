import { createEffect, createSignal } from 'solid-js'
import YTPlayer from 'youtube-player'

const YoutubePlayer = () => {
  const [player, setPlayer] = createSignal()
  
  createEffect(() => {
    setPlayer(YTPlayer('player'))
  })

  return (
    <div id='player'></div>
  )
}

export default YoutubePlayer