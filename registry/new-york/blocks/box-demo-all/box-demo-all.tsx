import React from 'react';
import "./box-demo-all.css"

// CloseIcon Component
const CloseIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & { size?: number }>(
  ({ size = 16, className = '', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
CloseIcon.displayName = 'CloseIcon';

// BoxButton Component
interface BoxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const BoxButton = React.forwardRef<HTMLButtonElement, BoxButtonProps>(
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

// BoxIconButton Component
interface BoxIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'subtle' | 'ghost';
}

const BoxIconButton = React.forwardRef<HTMLButtonElement, BoxIconButtonProps>(
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

// Demo Component
export function BoxDemoAll() {
  return (
    <div className="box-demo-container">
      <div className="button-section">
        <h2 className="section-title">Button Variations</h2>
        <div className="demo-row">
          <h3>Primary</h3>
          <BoxButton>Click me</BoxButton>
        </div>
        <div className="demo-row">
          <h3>Secondary</h3>
          <BoxButton variant="secondary">Click me</BoxButton>
        </div>
        <div className="demo-row">
          <h3>Tertiary</h3>
          <BoxButton variant="tertiary">Click me</BoxButton>
        </div>
        <div className="demo-row">
          <h3>Small</h3>
          <BoxButton size="small">Click me</BoxButton>
        </div>
        <div className="demo-row">
          <h3>Large</h3>
          <BoxButton size="large">Click me</BoxButton>
        </div>
      </div>

      <div className="button-section">
        <h2 className="section-title">Icon Button Variations</h2>
        <div className="demo-row">
          <h3>Default</h3>
          <BoxIconButton variant="subtle"><CloseIcon /></BoxIconButton>
        </div>
        <div className="demo-row">
          <h3>Small</h3>
          <BoxIconButton size="small"><CloseIcon /></BoxIconButton>
        </div>
        <div className="demo-row">
          <h3>Large</h3>
          <BoxIconButton size="large"><CloseIcon /></BoxIconButton>
        </div>
      </div>
    </div>
  );
}

