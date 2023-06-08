import { createEffect, createSignal } from 'solid-js'
import YTPlayer from 'youtube-player'
import styles from './youtube-player.module.css'
import { YouTubePlayer } from 'youtube-player/dist/types'

const YoutubePlayer = () => {
  const [player, setPlayer] = createSignal<YouTubePlayer>()
  const [censored, setCensored] = createSignal(false)
  const playerWrapperClasses = () => ({
    [`${styles.playerWrapper}`]: true,
    [`${styles.censored}`]: censored(),
  })
  
  createEffect(() => {
    setPlayer(YTPlayer('player', {
      playerVars: {
        controls: 0
      }
    }))
    player()?.loadVideoById('zMUhIgoj_W4')
    player()?.mute()
    setTimeout(() => {
      player()?.pauseVideo()
      player()?.seekTo(0, false)
    }, 1000)
  })

  const onCensor = () => {
    setCensored(value => !value)
  }

  return (
    <div class={styles.container}>
      <div classList={playerWrapperClasses()}>
        <div id='player' class={styles.player} />
      </div>
      <button class={styles.censor} onClick={onCensor}>
        {censored() ? 'Censored' : 'Censor'}
      </button>
    </div>
  )
}

export default YoutubePlayer