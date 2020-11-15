import React from 'react';
import "./post-add-form.css";

const AddPost = () => {
    return (
        <form className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="Write down your minds"
                className="form-control new-post-label"
                />
            <button
                type="button"
                className="btn btn-outline-secondary">
            ADD</button>
        </form>
    );
};

export default AddPost;