import React from 'react';

export interface CloseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const CloseIcon = React.forwardRef<SVGSVGElement, CloseIconProps>(
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

