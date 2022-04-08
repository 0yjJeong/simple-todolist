import React from 'react';

export type ButtonBaseType = {
  palette: {
    /**
     * A font color
     */
    color: React.CSSProperties['color'];
    /**
     * A theme color
     */
    light: React.CSSProperties['background'];
    /**
     * A theme color when it is hovered
     */
    darker: React.CSSProperties['background'];
  };
  /**
   * Text sizes
   */
  size?: 'small' | 'large';
  /**
   * Types of button variation
   */
  variant?: 'text' | 'outlined' | 'contained';
};
