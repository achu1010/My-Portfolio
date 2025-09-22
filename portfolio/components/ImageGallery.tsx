import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  projectName: string;
  imagePaths: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery = ({ projectName, imagePaths, isOpen, onClose }: ImageGalleryProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-6xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
          aria-label="Close gallery"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Gallery Title */}
        <h3 className="text-center text-2xl font-bold text-white mb-6">{projectName} Screenshots</h3>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagePaths.map((path, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:scale-105 hover:z-10"
            >
              <div className="bg-gray-900/70 rounded-lg overflow-hidden border border-blue-500/50 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 h-full">
                <div className="relative aspect-video">
                  <Image
                    src={path}
                    alt={`${projectName} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-3">
                  <p className="text-white text-center">Screenshot {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;