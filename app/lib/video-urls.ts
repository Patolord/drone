export type MuxMaxResolution = "720p" | "1080p" | "1440p" | "2160p";

export type GalleryVideo = {
  playbackId: string;
  alt: string;
  caption: string;
};

export const muxStreamUrl = (playbackId: string) =>
  `https://stream.mux.com/${playbackId}.m3u8`;

export const muxPosterUrl = (
  playbackId: string,
  width: 1280 | 1920 = 1280,
) =>
  `https://image.mux.com/${playbackId}/thumbnail.webp?time=1&width=${width}&fit_mode=crop`;

/**
 * Hero currently ladders to 1080p only (no 1440p/2160p in the HLS master).
 * Re-create the Mux asset with `max_resolution_tier: "2160p"` and
 * `video_quality: "basic"` or `"premium"` (not Plus / MPEG-TS) so ABR can
 * climb to 4K. Playback ID can stay the same after a new asset is wired here.
 */
export const HERO_VIDEO_PLAYBACK_ID =
  "9sxZTOic00L9YY9wAn8gO79cKa1p5PK01Vup9b1iilBlA";

export const HERO_VIDEO_SRC = muxStreamUrl(HERO_VIDEO_PLAYBACK_ID);
export const HERO_VIDEO_POSTER_SRC = muxPosterUrl(
  HERO_VIDEO_PLAYBACK_ID,
  1920,
);

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    playbackId: "skM8iDuEvCTxUYeU8301BCOVP4Yn9LjKBrdU02TThkNx00",
    alt: "Vídeo 1",
    caption: "Projeto praia · Guarujá",
  },
  {
    playbackId: "WOJtx3t01hcf2n8F01ispf6GkbN9uN4cpSKxWkbp00bFjA",
    alt: "Vídeo 2",
    caption: "projeto sitio · festa junina",
  },
  {
    playbackId: "PHsglSyOw51zCaVpyJ00fCCgnI01iBTUXljeUMGZ00wRV4",
    alt: "Vídeo 3",
    caption: "Projeto Ilha · Litoral",
  },
  {
    playbackId: "mdHWazxtVeiZofEvoF9VGLMBxchUOwOFVFNtgtpNfZA",
    alt: "Vídeo 4",
    caption: "Projeto Tênis · Zona Norte",
  },
  {
    playbackId: "TFkLkgjcnXLGn01WIQxM3KedmW6a0202Bay6jilI4yg99w",
    alt: "Vídeo 5",
    caption: "Projeto Nature Flow · Costa",
  },
];

/**
 * Captions for gallery clips 6–10. Add a Mux playback ID to each object
 * and push it into `GALLERY_VIDEOS` when the asset is uploaded.
 */
export const GALLERY_VIDEOS_PENDING: Omit<GalleryVideo, "playbackId">[] = [
  { alt: "Vídeo 6", caption: "Projeto Residencial · placa Solar" },
  { alt: "Vídeo 7", caption: "Projeto Mapeamento Aéreo · Zona Leste" },
  { alt: "Vídeo 8", caption: "Projeto Vista Urbana · Centro" },
  { alt: "Vídeo 9", caption: "Projeto Apresentação de Terreno · Rural" },
  { alt: "Vídeo 10", caption: "Projeto Inspeção Estrutural · Residencial" },
];
