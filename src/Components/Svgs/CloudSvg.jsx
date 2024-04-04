import React from 'react';

function CloudSvg(props) {
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
                d="M13.36 5.14a4.42 4.42 0 0 0-8.44.66 4.11 4.11 0 0 0-.82 8.15h11.73a3.65 3.65 0 1 0 0-7.3h-.18zM20.83 8.79a5.72 5.72 0 0 0-6.24-.82 5.3 5.3 0 0 0-1.05 10.5H3.65a3.65 3.65 0 1 0 0 7.3h17.18a2.86 2.86 0 0 0 .08-5.71 5.46 5.46 0 0 0 1.91-10.79z"
            />
        </svg>
    );
}

export default CloudSvg;
