import React, { createContext, useContext } from 'react';
import useTypography from './Type/useTypography';

const TypographyContext = createContext<any>(null);

export const TypographyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const typography = useTypography();  // Use the hook here to manage state globally

  return (
    <TypographyContext.Provider value={typography}>
      {children}
    </TypographyContext.Provider>
  );
};

// Custom hook to use typography context
export const useTypographyContext = () => {
  const context = useContext(TypographyContext);
  if (!context) {
    throw new Error('useTypographyContext must be used within a TypographyProvider');
  }
  return context;
};