import React, {Component} from 'react';
import "./post-list-item.css";

export default class PostListItem extends Component {

    render(){
        const {label, onDelete, onTogImportant, onTogDone, important, done} = this.props;

        let classNames = "app-list-item d-flex";
        if(important){
            classNames += " important";
        }
        if(done){
            classNames += " done";
        }

        return(
            <div className={classNames}
                onDoubleClick={onTogDone}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="btn-wrap d-flex" >
                    <i  onClick={onTogDone} className=" fa fa-check-circle"></i>
                    <button 
                        onClick={onTogImportant}
                        type="button"
                        className="btn-flag btn-sm">
                        <i className=" fa fa-flag"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className=" fa fa-trash-o"></i>
                    </button>
                    
                </div>
            </div>
        );
    }
}