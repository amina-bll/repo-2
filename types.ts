
// Fix: Import React to resolve React namespace errors for ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}
