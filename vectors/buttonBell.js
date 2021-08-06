import React from 'react';

const ButtonBell = () => {
    return (
        <svg width="55" height="60" viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M8.09423 13.9624L26.7908 3.98583L54.729 44.2449L14.4668 50.0403L8.09423 13.9624Z" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0" transform="translate(-0.479553) scale(0.00391821 0.00322581)"/>
                </pattern>
                <image id="image0" width="500" height="310" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    );
};

export default ButtonBell;
