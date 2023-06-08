import type { Component } from 'solid-js';

import styles from './App.module.css';
import YoutubePlayer from './components/youtube-player/youtube-player';

const App: Component = () => {
  return (
    <div class={styles.app}>
      <YoutubePlayer />
    </div>
  );
};

export default App;
