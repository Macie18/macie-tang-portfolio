import React from 'react';

export interface Tag {
  label: string;
  type?: 'skill' | 'location' | 'date';
}

export interface DiagramImage {
  src: string;
  label: string;
  caption?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  location: string;
  description: string[];
  tags: string[];
  imageSrc?: string;
  imageFit?: 'cover' | 'contain';
  imageLabel?: string;
  imageNote?: string;
  diagramContent?: React.ReactNode;
  liveDemoUrl?: string;
  documentUrl?: string;
  documentLabel?: string;
  slideImages?: string[];   // 幻灯片图片路径数组（预渲染的 PDF 页图片）
  /** 图表区：多张图片 + 说明文字，点击放大 */
  diagramZone?: DiagramImage[];
  metrics?: Metric[];
  eyebrow?: string;
}

export interface Honor {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  imageSrc?: string;
  imageFit?: 'cover' | 'contain';
  documentSrc?: string;
  documentPage?: number;
  description?: string;
  placeholder?: boolean;
}

export interface GalleryItem {
  src: string;
  kicker: string;
  title: string;
  caption: string;
  objectPosition?: string;
}
