import React, { createContext, useContext } from 'react';
import useLayout from './Layout/useLayout';

const LayoutContext = createContext<any>(null);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const layout = useLayout();  // Use the hook here to manage state globally

  return (
    <LayoutContext.Provider value={layout}>
      {children}
    </LayoutContext.Provider>
  );
};

// Custom hook to use typography context
export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};