import React from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../post-filter/post-filter";
import PostList from "../post-list/post-list";
import AddPost from "../post-add-form/post-add-form";
import "./app.css";

const App = () => {

    const data = [
        {
            label: "I continue to learning. It's so difficult, but I can!",
            important: true,
            id: "qwe"
        },
        {
            label: "There were first steps in REACT today",
            important: false,
            id: "ewq"
        },
        {
            label: "Going to learn REACT",
            important: false,
            id: "qaz"
        }
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <Filter/>
            </div>
            <PostList posts={data}/>
            <AddPost/>
        </div>

    );
};

export default App;