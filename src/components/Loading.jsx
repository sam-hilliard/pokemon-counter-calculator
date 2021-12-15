import React from 'react';

import '../css/Loading.css';

// loading animation displayed during processing of request
function Loading() {
    return (
        <div className="loading-container">
            <div className="loading"></div>
        </div>
    );
}

export default Loading;