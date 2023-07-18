import styles from '@components/create-video/create-video.module.css'

const CreateVideo = () => {
  return (
    <div class={styles.container}>
      <input type='text' class={styles.input} />
      <button class={styles.submit} onClick={() => undefined}>
        Éditer une vidéo
      </button>
    </div>
  )
}

export default CreateVideo