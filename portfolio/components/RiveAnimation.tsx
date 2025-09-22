import { useRive } from '@rive-app/react-canvas';
import { useEffect, useState } from 'react';

// RiveAnimation component props
interface RiveAnimationProps {
  src: string;
  stateMachine?: string;
  autoplay?: boolean;
  className?: string;
}

export default function RiveAnimation({ 
  src, 
  stateMachine, 
  autoplay = true,
  className = ''
}: RiveAnimationProps) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { RiveComponent, rive } = useRive({
    src,
    stateMachines: stateMachine ? [stateMachine] : undefined,
    autoplay,
  });

  if (!isClient) {
    return <div className={`${className} bg-gray-800 animate-pulse rounded-lg`}></div>;
  }

  // Fallback if Rive fails to load
  try {
    return <RiveComponent className={className} />;
  } catch (error) {
    console.error("Error loading Rive animation:", error);
    return <div className={`${className} bg-gray-800`}></div>;
  }
}