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

export interface Experience {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  location: string;
  description: string[];
  tags: string[];
  imageSrc?: string;
  fallbackImageSrc?: string;
  diagramContent?: React.ReactNode;
  liveDemoUrl?: string;
  slideImages?: string[];   // 幻灯片图片路径数组（预渲染的 PDF 页图片）
  /** 图表区：多张图片 + 说明文字，点击放大 */
  diagramZone?: DiagramImage[];
}

export interface Honor {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  imageSrc: string;
  description?: string;
}
