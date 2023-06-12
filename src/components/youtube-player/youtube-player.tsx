import { createEffect, createSignal, onMount } from 'solid-js'
import YTPlayer from 'youtube-player'
import styles from '@components/youtube-player/youtube-player.module.css'
import { YouTubePlayer } from 'youtube-player/dist/types'
import { PlayerState, StateChangeEvent } from '@components/youtube-player/youtube-player.interfaces'

const testSegments = [
  { start: 1, end: 3 },
  { start: 5, end: 8 },
  { start: 10, end: 12 }
]

const YoutubePlayer = () => {
  const [player, setPlayer] = createSignal<YouTubePlayer>()
  const [censored, setCensored] = createSignal(false)
  const [playing, setPlaying] = createSignal(false)
  const playerWrapperClasses = () => ({
    [`${styles.playerWrapper}`]: true,
    [`${styles.censored}`]: censored(),
  })

  const isOnCensoredSegment = (currentTime: number) => {
    return testSegments.some(entry => (
      entry.start < currentTime && entry.end > currentTime
    ))
  }

  const onEachFrame = async () => {
    const playerInstance = player()
    if(playerInstance){
      const currentTime = await playerInstance.getCurrentTime()
      const shouldCensor = isOnCensoredSegment(currentTime)
      if (shouldCensor && !censored()){
        setCensored(true)
      } else if (!shouldCensor && censored()) {
        setCensored(false)
      }
    }

    setTimeout(onEachFrame, 33)
  }

  const onStateChange = (event: StateChangeEvent) => {
    if(event.data === PlayerState.PLAYING){
      setPlaying(true)
      onEachFrame()
    }else{
      setPlaying(false)
    }
  }

  const initPlayer = () => {
    const playerInstance = player()
    if(playerInstance){
      playerInstance.loadVideoById('zMUhIgoj_W4')
      playerInstance.on("stateChange", onStateChange)
      playerInstance.mute()
      setTimeout(() => {
        playerInstance.pauseVideo()
        playerInstance.seekTo(0, true)
      }, 1000)
    }
  }
  
  onMount(() => {
    const playerInstance = YTPlayer('player', {
      playerVars: {
        autoplay: 0,
        controls: 0
      }
    })
    setPlayer(playerInstance)
    initPlayer()
    onEachFrame()
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