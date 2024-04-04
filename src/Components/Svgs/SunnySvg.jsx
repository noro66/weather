import React from 'react';

function SunnySvg(props) {
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
                d="M12 2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm-3.29 4.21a1 1 0 0 1 1.42 1.42L4.41 12l5.3 5.29a1 1 0 1 1-1.42 1.42L3 12.41l5.29-5.3a1 1 0 0 1 1.42 0zM12 18a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V19a1 1 0 0 1 1-1zm7-6h1.5a1 1 0 0 1 0 2H19a1 1 0 0 1-1-1zm-4.5-7V4a1 1 0 0 1 2 0v1.5a1 1 0 0 1-2 0zm-8 0A1 1 0 0 1 5 4V3a1 1 0 0 1 2 0v1.5a1 1 0 0 1-2 0zM19 8a1 1 0 0 1 1 1h1.5a1 1 0 0 1 0 2H20a1 1 0 0 1-1-1zm-3.29 4.21a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 12.41l-5.29 5.3a1 1 0 0 1-1.42-1.42L9.59 12 4.29 6.71a1 1 0 0 1 1.42-1.42L12 10.59l5.29-5.3a1 1 0 1 1 1.42 1.42L14.41 12l5.3 5.29a1 1 0 0 1 0 1.42z"
            />
        </svg>
    );
}

export default SunnySvg;
