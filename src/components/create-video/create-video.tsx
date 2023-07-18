import getYouTubeID from '@/services/helpers/youtube-id'
import createVideo from '@/services/videos/create'
import styles from '@components/create-video/create-video.module.css'

const CreateVideo = () => {
  let inputRef: HTMLInputElement | undefined
  
  const onClick = async () => {
    if (inputRef?.value){
      const videoId = getYouTubeID(inputRef.value)
      const videoCreation = await createVideo(videoId)
    }
  }

  return (
    <div class={styles.container}>
      <input
        type='text'
        ref={inputRef}
        class={styles.input}
        placeholder='URL de la vidéo'
      />
      <button
        type='submit'
        class={styles.button}
        onClick={onClick}
      >
        Censurer une vidéo
      </button>
    </div>
  )
}

export default CreateVideo