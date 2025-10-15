import React from 'react';
import './BoxButton.scss';

export interface BoxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const BoxButton = React.forwardRef<HTMLButtonElement, BoxButtonProps>(
  ({ variant = 'primary', size = 'medium', className = '', children, ...props }, ref) => {
    const classes = [
      'box-button',
      `box-button--${variant}`,
      `box-button--${size}`,
      className
    ].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

BoxButton.displayName = 'BoxButton';

