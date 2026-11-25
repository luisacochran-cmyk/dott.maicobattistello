/* ------------------------------------------------------------------
   Video GAET e PAET.
   I file MP4 e le immagini di anteprima stanno in public/videos/.
------------------------------------------------------------------- */

export type VideoSito = {
  src: string
  /* versione 720p più leggera, usata sui telefoni */
  srcMobile: string
  poster: string
  titolo: string
}

export const VIDEO_GAET: VideoSito = {
  src: "/videos/grande-autoemoterapia.mp4",
  srcMobile: "/videos/grande-autoemoterapia-720.mp4",
  poster: "/videos/grande-autoemoterapia.jpg",
  titolo: "Video: la Grande Autoemoterapia (GAET)",
}

export const VIDEO_PAET: VideoSito = {
  src: "/videos/piccola-autoemoterapia.mp4",
  srcMobile: "/videos/piccola-autoemoterapia-720.mp4",
  poster: "/videos/piccola-autoemoterapia.jpg",
  titolo: "Video: la Piccola Autoemoterapia (PAET)",
}

