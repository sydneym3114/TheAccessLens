const ColorFilters = () => {
    return (
        <>
            <div>
                <svg width="0" height="0">
                    <filter id="Normal" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 1 0"
                    />
                    </filter>

                    <filter id="Protanopia" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="0.56667 0.43333 0 0 0
                                0.55833 0.44167 0 0 0
                                0 0.24167 0.75833 0 0
                                0 0 0 1 0"
                    />
                    </filter>
                    <filter id="Protanomaly" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="0.81667 0.18333 0 0 0
                                0.33333 0.66667 0 0 0
                                0 0.125 0.875 0 0
                                0 0 0 1 0"
                    />
                    </filter>
                    <filter id="Deuteranopia" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="0.625 0.375 0 0 0
                                0.7 0.3 0 0 0
                                0 0.3 0.7 0 0
                                0 0 0 1 0"
                    />
                    </filter>
                    <filter id="Deuteranomaly" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="0.8 0.2 0 0 0
                                0.25833 0.74167 0 0 0
                                0 0.14167 0.85833 0 0
                                0 0 0 1 0"
                    />
                    </filter>
                    <filter id="Tritanopia" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="0.95 0.05 0 0 0
                                0 0.43333 0.56667 0 0
                                0 0.475 0.525 0 0
                                0 0 0 1 0"
                    />
                    </filter>
                    <filter id="Tritanomaly" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="0.96667 0.03333 0 0 0
                                0 0.73333 0.26667 0 0
                                0 0.18333 0.81667 0 0
                                0 0 0 1 0"
                    />
                    </filter>
                    <filter id="Achromatopsia" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="0.299 0.587 0.114 0 0
                                0.299 0.587 0.114 0 0
                                0.299 0.587 0.114 0 0
                                0 0 0 1 0"
                    />
                    </filter>
                    <filter id="Achromatomaly" x="0" y="0" width="1" height="1">
                    <feColorMatrix
                        type="matrix"
                        values="0.618 0.32 0.062 0 0
                                0.163 0.775 0.062 0 0
                                0.163 0.32 0.516 0 0
                                0 0 0 1 0"
                    />
                    </filter>
                </svg>
            </div>
            
        </>
    );
};

export default ColorFilters;