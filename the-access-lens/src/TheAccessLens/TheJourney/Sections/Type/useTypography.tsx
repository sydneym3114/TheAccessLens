import { useState } from 'react';

// Define TextAlign type
type TextAlign = 'left' | 'center' | 'right';

const useTypography = () => {
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(16);
    const [lineHeight, setLineHeight] = useState(1);
    const [lineLength, setLineLength] = useState(140);
    const [headerFontSize, setHeaderFontSize] = useState(24);
    const [textAlign, setTextAlign] = useState<TextAlign>('left');
    const [headerTextAlign, setHeaderTextAlign] = useState<TextAlign>('left'); // Added header alignment state
  
    const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFont(event.target.value);
    };
  
    const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFontSize(Number(event.target.value));
    };
  
    const handleHeaderFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHeaderFontSize(Number(event.target.value));
    };
  
    const handleLineHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLineHeight(Number(event.target.value));
    };
  
    const handleLineLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLineLength(Number(event.target.value));
    };
  
    const handleTextAlignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setTextAlign(event.target.value as TextAlign);
    };
  
    const handleHeaderTextAlignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setHeaderTextAlign(event.target.value as TextAlign); // Handler for header alignment
    };
  
    return {
      font,
      fontSize,
      headerFontSize,
      lineHeight,
      lineLength,
      textAlign,
      headerTextAlign, // Return header text alignment
      handleFontChange,
      handleFontSizeChange,
      handleHeaderFontSizeChange,
      handleLineHeightChange,
      handleLineLengthChange,
      handleTextAlignChange,
      handleHeaderTextAlignChange, // Expose the header alignment change handler
    };
  };

  export default useTypography;