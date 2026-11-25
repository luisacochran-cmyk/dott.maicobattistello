/* ------------------------------------------------------------------
   Video del sito: player HTML5 con i file MP4 in public/videos/.
   Riempie il riquadro 16:9 che lo contiene.
------------------------------------------------------------------- */

export default function VideoPlayer({
  src,
  srcMobile,
  poster,
  titolo,
}: {
  src: string
  srcMobile?: string
  poster?: string
  titolo: string
}) {
  return (
    <video
      className="h-full w-full bg-slate-900 object-contain"
      controls
      preload="metadata"
      playsInline
      poster={poster}
      aria-label={titolo}
      title={titolo}
    >
      {srcMobile && (
        <source src={srcMobile} type="video/mp4" media="(max-width: 767px)" />
      )}
      <source src={src} type="video/mp4" />
      Il suo browser non riesce a riprodurre il video.{" "}
      <a href={src}>Scarichi il video</a>.
    </video>
  )
}
