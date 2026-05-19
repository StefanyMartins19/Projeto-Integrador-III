import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const DARK_MODE_STORAGE_KEY = 'versiontrack-dark-mode';

function getInitialDarkMode() {
  const storedValue = window.localStorage.getItem(DARK_MODE_STORAGE_KEY);

  if (storedValue === 'enabled') {
    return true;
  }

  if (storedValue === 'disabled') {
    return false;
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem(DARK_MODE_STORAGE_KEY, isDarkMode ? 'enabled' : 'disabled');
  }, [isDarkMode]);

  return (
    <button
      type="button"
      aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      aria-pressed={isDarkMode}
      title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      onClick={() => setIsDarkMode((current) => !current)}
      className={`fixed bottom-4 right-4 z-[2147483647] flex h-8 w-14 items-center rounded-full p-1 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 ${
        isDarkMode
          ? 'justify-end bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-400'
          : 'justify-start bg-gradient-to-r from-orange-400 via-rose-500 to-purple-700'
      }`}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/90 text-white shadow-md transition">
        {isDarkMode ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
