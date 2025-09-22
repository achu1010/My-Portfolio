import { useEffect } from 'react';

interface KeyboardShortcutProps {
  shortcuts: {
    key: string;
    id: string;
    description: string;
  }[];
}

export default function KeyboardShortcuts({ shortcuts }: KeyboardShortcutProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const shortcut = shortcuts.find(
        (s) => s.key.toLowerCase() === event.key.toLowerCase()
      );

      if (shortcut) {
        const element = document.getElementById(shortcut.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [shortcuts]);

  return (
    <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 z-50 hidden md:block">
      <h3 className="text-sm font-semibold mb-2 text-primary">Keyboard Shortcuts</h3>
      <ul className="text-xs space-y-1 text-secondary-text">
        {shortcuts.map((shortcut) => (
          <li key={shortcut.key} className="flex items-center">
            <kbd className="bg-gray-100 px-2 py-0.5 rounded mr-2 font-mono">{shortcut.key}</kbd>
            <span>{shortcut.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}