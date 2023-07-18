import type { Component } from 'solid-js';

import styles from './App.module.css';
import YoutubePlayer from './components/youtube-player/youtube-player';
import CreateVideo from '@/components/create-video/create-video';

const App: Component = () => {
  return (
    <div class={styles.app}>
      {/* <YoutubePlayer id='zMUhIgoj_W4'/> */}
      <CreateVideo />
    </div>
  );
};

export default App;
