import React from 'react';

function CloudSvg(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100"
            height="100"
            {...props}
        >
            <path fill="#90A4AE" d="M13 10h5a3 3 0 0 0 0-6h-1a4 4 0 0 0-7.79-1M5.21 8H4a4 4 0 0 0 0 8h1.21a4 4 0 0 0 0-8M14 16H6a3 3 0 0 1 0-6h8a3 3 0 0 1 0 6"/>
        </svg>
    );
}

export default CloudSvg;
