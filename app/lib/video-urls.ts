const muxVideoUrl = (playbackId: string) =>
  `https://stream.mux.com/${playbackId}.m3u8`;

const muxThumbnailUrl = (playbackId: string) =>
  `https://image.mux.com/${playbackId}/thumbnail.webp?time=1&width=2560&height=1440&fit_mode=crop`;

const HERO_VIDEO_PLAYBACK_ID = "9sxZTOic00L9YY9wAn8gO79cKa1p5PK01Vup9b1iilBlA";

export const HERO_VIDEO_SRC = muxVideoUrl(HERO_VIDEO_PLAYBACK_ID);
export const HERO_VIDEO_POSTER_SRC = muxThumbnailUrl(
  HERO_VIDEO_PLAYBACK_ID,
);

export const video01 = muxVideoUrl(
  "skM8iDuEvCTxUYeU8301BCOVP4Yn9LjKBrdU02TThkNx00",
);

export const video02 = muxVideoUrl(
  "WOJtx3t01hcf2n8F01ispf6GkbN9uN4cpSKxWkbp00bFjA",
);

export const video03 = muxVideoUrl(
  "PHsglSyOw51zCaVpyJ00fCCgnI01iBTUXljeUMGZ00wRV4",
);

export const video04 = muxVideoUrl(
  "mdHWazxtVeiZofEvoF9VGLMBxchUOwOFVFNtgtpNfZA",
);

export const video05 = muxVideoUrl(
  "TFkLkgjcnXLGn01WIQxM3KedmW6a0202Bay6jilI4yg99w",
);
