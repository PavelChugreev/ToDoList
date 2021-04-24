import React from 'react';
import "./app-header.css";

const AppHeader = ({done, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>ToDo List</h1>
            <h2>{allPosts} purposes, {done} done</h2>
        </div>
    );
};

export default AppHeader;