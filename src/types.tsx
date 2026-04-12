import React from 'react';

export type Language = 'en' | 'mm';

export interface NavLink {
  href: string;
  label: {
    en: string;
    mm: string;
  };
}

export interface Discourse {
  date: string;
  title: {
    en: string;
    mm: string;
  };
  summary: {
    en: string;
    mm: string;
  };
  keyTerms: {
    term: string;
    explanation: {
      en: string;
      mm: string;
    };
  }[];
  roadmap: {
    en: string;
    mm: string;
  }[];
}

export interface Center {
  id: string;
  title: {
    en: string;
    mm: string;
  };
  description: {
    en: string;
    mm: string;
  };
  phone: string;
  detailLink: string;
  discourses: Discourse[];
}

export interface Pillar {
  title: {
    en: string;
    mm: string;
  };
  summary: {
    en: string;
    mm: string;
  };
  fullText: {
    en: string;
    mm: string;
  };
  icon: React.ReactNode;
  color?: string;
}
