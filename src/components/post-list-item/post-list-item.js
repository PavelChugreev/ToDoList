import React, {Component} from 'react';
import "./post-list-item.css";

export default class PostListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        };
        
        this.onImportant = this.onImportant.bind(this);
        this.onLike = () => {
            this.setState(({like}) => ({
                like: !like
            }));
        };
    }

    onImportant(){
        this.setState(({important}) => ({
            important: !important
        }));
    }

    render(){
        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = "app-list-item d-flex";
        if(important){
            classNames += " important";
        }
        if(like){
            classNames += " like";
        }

        return(
            <div className={classNames}
                onDoubleClick={this.onLike}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="btn-wrap d-flex" >
                    <button 
                        onClick={this.onImportant}
                        type="button"
                        className="btn-star btn-sm">
                        <i className=" fa fa-star"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btn-sm">
                        <i className=" fa fa-trash-o"></i>
                    </button>
                    <i  onClick={this.onLike} className="fa fa-heart"></i> 
                </div>
            </div>
        );
    }
}