export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

export interface Service {
  id: string;
  title: string;
  price?: string;
  duration?: string;
  description: string;
  image: ImageMetadata | string;
  category: string;
  order?: number;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  image: ImageMetadata | string;
  alt: string;
}
