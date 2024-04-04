import React from 'react';

function RainySvg(props) {
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
                d="M16 15v1.5a4 4 0 0 1-8 0V15a6 6 0 1 0 8 0zM12 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-2 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm2-2a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM9 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-2 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
            />
        </svg>
    );
}

export default RainySvg;
