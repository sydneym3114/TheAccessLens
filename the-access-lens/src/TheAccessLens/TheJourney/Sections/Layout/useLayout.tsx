import { useState } from 'react';

const useLayout = () => {

    const [columns, setColumns] = useState(1);
    const [gutter, setGutter] = useState(16);
    const [margin, setMargin] = useState(0);
    const [padding, setPadding] = useState(15);
    const [containerWidth, setContainerWidth] = useState(140);

    const handleColumnsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColumns(Number(event.target.value));
    };

    const handleGutterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGutter(Number(event.target.value));
    };

    const handleMarginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMargin(Number(event.target.value));
    };

    const handlePaddingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPadding(Number(event.target.value));
    };

    const handleContainerWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContainerWidth(Number(event.target.value));
    };

    return {
        columns,
        gutter,
        margin,
        padding,
        containerWidth,
        handleColumnsChange,
        handleGutterChange,
        handleMarginChange,
        handlePaddingChange,
        handleContainerWidthChange,
    };
};

export default useLayout;