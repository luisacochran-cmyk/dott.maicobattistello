/* ------------------------------------------------------------------
   Video GAET e PAET.
   I file MP4 e le immagini di anteprima stanno in public/videos/.
   I vecchi link Vimeo restano qui sotto come riserva: per tornare a
   Vimeo basta usare VIMEO_GAET / VIMEO_PAET al posto di VIDEO_*.src
------------------------------------------------------------------- */

export type VideoSito = {
  src: string
  poster: string
  titolo: string
}

export const VIDEO_GAET: VideoSito = {
  src: "/videos/grande-autoemoterapia.mp4",
  poster: "/videos/grande-autoemoterapia.jpg",
  titolo: "Video: la Grande Autoemoterapia (GAET)",
}

export const VIDEO_PAET: VideoSito = {
  src: "/videos/piccola-autoemoterapia.mp4",
  poster: "/videos/piccola-autoemoterapia.jpg",
  titolo: "Video: la Piccola Autoemoterapia (PAET)",
}

/* Riserva: link Vimeo usati fino a novembre 2026 */
export const VIMEO_GAET =
  "https://player.vimeo.com/video/1167667746?h=c3a7c519ea&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1"
export const VIMEO_PAET =
  "https://player.vimeo.com/video/1167667781?h=802d55120b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1"
