declare module '@rive-app/react-canvas' {
  export interface RiveProps {
    src: string;
    artboard?: string;
    animations?: string[];
    stateMachines?: string[];
    layout?: {
      fit?: 'contain' | 'cover' | 'fill' | 'fitWidth' | 'fitHeight' | 'none';
      alignment?: 'center' | 'topLeft' | 'topCenter' | 'topRight' | 'centerLeft' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    };
    autoplay?: boolean;
    onPlay?: (animationName: string, isStateMachine: boolean) => void;
    onPause?: (animationName: string, isStateMachine: boolean) => void;
    onStop?: (animationName: string, isStateMachine: boolean) => void;
    onLoop?: (animationName: string, loopCount: number) => void;
    onStateChange?: (stateMachineName: string, stateName: string) => void;
  }

  export interface UseRiveParameters extends RiveProps {}

  export interface RiveState {
    rive: any | null;
    RiveComponent: React.ComponentType<any>;
    isPlaying: boolean;
    pause: () => void;
    play: (animationName?: string, isStateMachine?: boolean) => void;
    stop: (animationName?: string, isStateMachine?: boolean) => void;
  }

  export function useRive(params: UseRiveParameters): RiveState;
  export function useStateMachineInput(
    rive: any | null,
    stateMachineName: string,
    inputName: string
  ): [any, (value: any) => void];
}