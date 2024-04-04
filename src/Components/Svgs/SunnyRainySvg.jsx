import React from 'react';

function SunnyRainySvg(props) {
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
                d="M13 3.5V2h-2v1.5a6.5 6.5 0 0 0-5.1 11.03A4.99 4.99 0 0 0 5 18c0 2.76 2.24 5 5 5h8a6 6 0 0 0 0-12H13V5h4a3 3 0 0 0 0-6h-4V1h2a1 1 0 0 1 .83.45A6.5 6.5 0 0 0 13 3.5zM10 4a4 4 0 0 1 3.2-3.92A4.52 4.52 0 0 1 17 4H10z"
            />
        </svg>
    );
}

export default SunnyRainySvg;
