import React from 'react';

function LightRainSvg(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M15 3a2 2 0 0 0-1 3.73A5 5 0 1 0 13 16a2 2 0 1 0 0 4 9 9 0 0 0 0-18zM8.5 15a2 2 0 1 1-.21-3.99 1 1 0 1 0-1.01-1.79 4 4 0 1 1 4.22 0 1 1 0 1.79 1 1 0 1 0-1.01 1.79 2 2 0 0 1-.99 3.99z"
            />
        </svg>
    );
}

export default LightRainSvg;
