import React from 'react';

export interface ComponentType {
  component: React.FC;
  path: string | string[];
  exact: boolean;
}
