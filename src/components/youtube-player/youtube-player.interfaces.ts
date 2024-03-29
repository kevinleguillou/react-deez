export type StateChangeEvent = CustomEvent<any> & { data: number }

export enum PlayerState{
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5
}

export interface PlayerProps{
  id: string
}