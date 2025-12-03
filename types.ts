import React from 'react';

export enum SectionType {
  EDUCATION = 'Edukasi',
  VISUALS = 'Visual Breakdown',
  DESIGN = 'Design Insight'
}

export interface PosterElement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CreditMember {
  name: string;
  id: string;
}