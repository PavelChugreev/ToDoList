import React, { Component } from 'react';
import "./search-panel.css";


export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ""
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e){
        const termValue = e.target.value;
        this.setState({term: termValue})
        this.props.onUpdateTerm(termValue);
    }

    render(){
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="search in posts"
                onChange={this.onUpdateSearch}
            />
        );
    }
};