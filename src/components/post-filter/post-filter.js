import React from 'react';
import "./post-filter.css";

const Filter = () => {
    return(
        <div className="btn-group">
            <button type="button" className="btn btn-info">All</button>
            <button type="button" className="btn btn-outline-secondary">Liked</button>
        </div>
    )
};
export default Filter;