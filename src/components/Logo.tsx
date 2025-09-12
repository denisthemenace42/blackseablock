import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  useImage?: boolean;
  noGlow?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', useImage = true, noGlow = false }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  // If useImage is true, show the PNG logo with styling
  if (useImage) {
    const glowClass = noGlow ? '' : 'filter drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] animate-pulse-glow';
    return (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <img 
          src="/blackseablock-logo.png" 
          alt="Black Sea Block Logo" 
          className={`w-full h-full object-contain ${glowClass}`}
        />
      </div>
    );
  }

  // Fallback to CSS-based logo
  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* Main cube container */}
      <div className="relative w-full h-full transform rotate-12 perspective-1000">
        {/* Cube faces */}
        <div className="absolute inset-0">
          {/* Top face - water texture */}
          <div 
            className="absolute top-0 left-0 w-full h-full transform-origin-top transform -rotate-x-45"
            style={{
              background: 'linear-gradient(45deg, #003366 0%, #004499 25%, #00D4AA 50%, #003366 75%, #004499 100%)',
              backgroundSize: '8px 8px',
              clipPath: 'polygon(0% 0%, 100% 0%, 80% 20%, 20% 20%)'
            }}
          />
          
          {/* Front-left face - anchor */}
          <div 
            className="absolute top-0 left-0 w-full h-full transform-origin-left transform rotate-y-45"
            style={{
              background: '#003366',
              clipPath: 'polygon(0% 0%, 20% 20%, 20% 80%, 0% 100%)'
            }}
          >
            {/* Anchor symbol */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Anchor shaft */}
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-300 to-teal-500 mx-auto"></div>
                {/* Anchor ring */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-cyan-300 rounded-full"></div>
                {/* Anchor arms */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  <div className="w-2 h-1 bg-gradient-to-r from-cyan-300 to-teal-500 transform rotate-45"></div>
                  <div className="w-2 h-1 bg-gradient-to-r from-teal-500 to-cyan-300 transform -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Front-right face - text */}
          <div 
            className="absolute top-0 left-0 w-full h-full transform-origin-right transform -rotate-y-45"
            style={{
              background: '#003366',
              clipPath: 'polygon(80% 20%, 100% 0%, 100% 100%, 80% 80%)'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-start pl-2">
              <div className="text-xs font-bold text-gray-800 pixel-text" style={{ fontFamily: 'Courier New, monospace' }}>
                BLACK
              </div>
              <div className="text-xs font-bold text-cyan-400 pixel-text" style={{ fontFamily: 'Courier New, monospace' }}>
                SEA
              </div>
              <div className="text-xs font-bold text-white pixel-text" style={{ fontFamily: 'Courier New, monospace' }}>
                BLOCK
              </div>
            </div>
          </div>
        </div>
        
        {/* Glowing border effect */}
        <div 
          className="absolute inset-0 border-2 border-cyan-400 rounded-lg animate-pulse-glow"
          style={{
            filter: 'drop-shadow(0 0 8px #00FFFF)',
            clipPath: 'polygon(0% 0%, 100% 0%, 80% 20%, 20% 20%, 20% 80%, 0% 100%, 100% 100%, 80% 80%)'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
