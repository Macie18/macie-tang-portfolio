import React from 'react';

export interface Tag {
  label: string;
  type?: 'skill' | 'location' | 'date';
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
}

export interface Honor {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  imageSrc: string;
  description?: string;
}
