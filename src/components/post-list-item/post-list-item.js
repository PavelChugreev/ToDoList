import React from 'react';
import "./post-list-item.css";


const PostListItem = () => {
    return(
        <li className="app-list-item d-flex">
            <span className="app-list-item-label">
                Any text
            </span>
            <div className="btn-wrap d-flex" >
                <button 
                    type="button"
                    className="btn-star btn-sm">
                    <i className=" fa fa-star"></i>
                </button>
                <button 
                    type="button"
                    className="btn-trash btn-sm">
                    <i className=" fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    );
};

export default PostListItem;