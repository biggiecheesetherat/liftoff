export interface GameConfig {
  width: number;
  height: number;
  bg: string;
  gravity: number;
  pixelated: boolean;
}

export interface SpriteAsset {
  id: string;
  name: string;
  pos: { x: number; y: number };
  vel: { x: number; y: number };
  angle: number;
  linkSize: number;
  opacity: number;
  mass: number;
  base64?: string; // For imported images
}

export interface SoundAsset {
  id: string;
  name: string;
  base64?: string;
}