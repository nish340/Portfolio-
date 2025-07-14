import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../hooks/use-theme';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, setTheme, actualTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeOptions = [
    { 
      value: 'light' as const, 
      label: 'Light', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      )
    },
    { 
      value: 'dark' as const, 
      label: 'Dark', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )
    },
    { 
      value: 'system' as const, 
      label: 'System', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    }
  ];

  const getCurrentIcon = () => {
    if (theme === 'system') {
      return actualTheme === 'dark' ? themeOptions[1].icon : themeOptions[0].icon;
    }
    return themeOptions.find(option => option.value === theme)?.icon || themeOptions[0].icon;
  };

  return (
    <div className="theme-toggle" ref={dropdownRef}>
      <button
        className={`theme-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
        title="Change theme"
      >
        <span className="theme-icon">
          {getCurrentIcon()}
        </span>
        <span className="theme-chevron">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </span>
      </button>
      
      {isOpen && (
        <div className="theme-dropdown">
          <div className="dropdown-header">
            <span>Choose theme</span>
          </div>
          {themeOptions.map((option) => (
            <button
              key={option.value}
              className={`theme-option ${theme === option.value ? 'active' : ''}`}
              onClick={() => {
                setTheme(option.value);
                setIsOpen(false);
              }}
            >
              <span className="option-icon">{option.icon}</span>
              <span className="option-label">{option.label}</span>
              {theme === option.value && (
                <span className="check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;