import React from 'react';
import './BoxIconButton.css';

export interface BoxIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The icon to display inside the button
   */
  children: React.ReactNode;
  /**
   * Size variant of the icon button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Visual variant of the icon button
   */
  variant?: 'default' | 'subtle' | 'ghost';
}

export const BoxIconButton = React.forwardRef<HTMLButtonElement, BoxIconButtonProps>(
  ({ children, size = 'medium', variant = 'default', className = '', ...props }, ref) => {
    const classes = [
      'box-icon-button',
      `box-icon-button--${variant}`,
      `box-icon-button--${size}`,
      className
    ].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classes} type="button" {...props}>
        {children}
      </button>
    );
  }
);

BoxIconButton.displayName = 'BoxIconButton';

