import { useRive } from '@rive-app/react-canvas';

interface DarkBackgroundProps {
  className?: string;
}

export default function DarkBackground({ className = '' }: DarkBackgroundProps) {
  const { RiveComponent } = useRive({
    src: '/animations/hero-background.riv',
    autoplay: true,
    stateMachines: ['State Machine 1'],
  });

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden bg-gray-900 ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <RiveComponent />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-black/80"></div>
    </div>
  );
}