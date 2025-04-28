import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LocalImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const LocalImage: React.FC<LocalImageProps> = ({ src, alt, width, height, className, priority }) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Function to convert local file path to data URL
    const loadLocalImage = async () => {
      try {
        // For client-side only
        if (typeof window !== 'undefined') {
          // Create a placeholder image with the specified dimensions
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          
          if (ctx) {
            // Fill with a placeholder color
            ctx.fillStyle = '#3B82F6'; // Blue color
            ctx.fillRect(0, 0, width, height);
            
            // Add text
            ctx.fillStyle = 'white';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('A', width / 2, height / 2 + 3);
            
            setImageSrc(canvas.toDataURL());
          }
        }
      } catch (error) {
        console.error('Error loading local image:', error);
      }
    };

    loadLocalImage();
  }, [src, width, height]);

  if (!imageSrc) {
    return <div className={`bg-blue-500 flex items-center justify-center text-white ${className}`} style={{ width, height }}>A</div>;
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};

export default LocalImage;
