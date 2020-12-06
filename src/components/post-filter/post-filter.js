import React, { Component } from 'react';
import "./post-filter.css";

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: "all", label: "All"},
            {name: "like", label: "Liked"}
        ]
    }

    render(){
        const {filter, onUpdateFilter} = this.props;
        const buttons = this.buttons.map( ({name, label}) => {
            const active = filter === name;
            const clazz = active ? "btn-info" : "btn-outline-secondary"
            return <button 
                        key={name} 
                        type="button" 
                        className={`btn ${clazz}`}
                        onClick={() => onUpdateFilter(name)}
                    >{label}</button>
        });
        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
};