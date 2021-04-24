import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";


const PostList = ({posts, onDelete, onTogImportant, onTogDone}) => {

    const elements = posts.map(item => {
        let className = "list-group-item";
        className = item.important ? className += " important" : className;
        className = item.done ? className += " done" : className;

        return(
            <li key={item.id} className= {className}>
                <PostListItem 
                    label={item.label} 
                    important={item.important}
                    done={item.done}
                    onDelete={() => onDelete(item.id)}
                    onTogImportant={() => onTogImportant(item.id)}
                    onTogDone={() => onTogDone(item.id)}/>
            </li>
        );
    });

    return(
        <ul className="post-list list-group">
            {elements}
        </ul>
    )
};
export default PostList;