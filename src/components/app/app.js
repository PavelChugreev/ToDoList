import React, {Component} from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../post-filter/post-filter";
import PostList from "../post-list/post-list";
import AddPost from "../post-add-form/post-add-form";
import "./app.css";

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    label: "Learning HTML/CSS",
                    important: false,
                    done: true,
                    id: 1
                },
                {
                    label: "Finish JavaScript course",
                    important: false,
                    done: true,
                    id: 2
                },
                {
                    label: "Gain knowledge about React",
                    important: false,
                    done: true,
                    id: 3
                },
                {
                    label: "Create first Reacr-App",
                    important: false,
                    done: true,
                    id: 4
                },
                {
                    label: "Prepare CV and portfolio",
                    important: false,
                    done: true,
                    id: 5
                },
                {
                    label: "Looking for a first job as a Frontend Developer",
                    important: true,
                    done: false,
                    id: 6
                },
            ],
            term: "",
            filter: "all"
        }
        this.maxId = 4;

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onTogImportant = this.onTogImportant.bind(this);
        this.onTogDone = this.onTogDone.bind(this);
        this.onUpdateTerm = this.onUpdateTerm.bind(this);
        this.onUpdateFilter = this.onUpdateFilter.bind(this);
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return { data: newArr }
        });
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {data: newArr};
        });
    }

    onTogImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const item = data[index];
            const newItem = {...item, important: !item.important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return {data: newArr};
        })
    }

    onTogDone(id){
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const item = data[index];
            const newItem = {...item, done: !item.done}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return {data: newArr};
        })   
    }

    searchPosts(data, term){
        if(term.length === 0){
            return data;
        } 
            return data.filter( item => {
                return item.label.indexOf(term) > -1
            });
    }

    onUpdateTerm(termValue){
        this.setState({term: termValue})
    }

    filterPosts(data, filter){
        if(filter === "done"){
            return data.filter( item => item.done);
        } else {
            return data;
        }
    }

    onUpdateFilter(filterStatus){
        this.setState({filter: filterStatus})
    }

    render() {
        const {data, term, filter} = this.state;
        const done = data.filter(item => item.done).length;
        const allPosts = data.length;

        const filteredPost = this.filterPosts(data, filter);
        const visiblePosts = this.searchPosts(filteredPost, term);

        return (
            <div className="app">
                <AppHeader
                    done={done}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateTerm={this.onUpdateTerm}
                    />
                    <Filter
                        onUpdateFilter={this.onUpdateFilter}
                        filter={filter}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onTogImportant={this.onTogImportant}
                    onTogDone={this.onTogDone}
                />
                <AddPost
                    onAdd={this.addItem}
                />
            </div>
        );
    }
};