import React from 'react';
import './styles.css';  // Asegúrate de importar el CSS

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  className = '',
}) => {
  // Mapeo de clases CSS
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large',
  };

  const colorClasses = {
    primary: 'spinner-primary',
    secondary: 'spinner-secondary',
    accent: 'spinner-accent',
  };

  return (
    <div className={`loading-spinner-container ${className}`}>
      <svg
        className={`spinner-svg ${sizeClasses[size]} ${colorClasses[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="spinner-circle"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="spinner-path"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span className="sr-only">Cargando...</span>
    </div>
  );
};