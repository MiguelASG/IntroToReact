import React from "react";
import {TodoList} from "./TodoList";


export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date() },
                {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
                {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], text: '' , priority: ""};
        this.handleChangePriority = this.handleChangePriority.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList todoList={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-text">
                        Text
                    </label>
                    <input
                        id="new-text"
                        onChange={this.handleChangeText}
                        value={this.state.text}
                    />
                    <label htmlFor="new-priority">
                        Priority
                    </label>
                    <input
                        id="new-priority"
                        onChange={this.handleChangePriority}
                        value={this.state.text}
                    />


                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChangeText(e) {
        this.setState({ text: e.target.value });
    }

    handleChangePriority(e){
        this.setState({priority: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const item = {text: this.state.text,
            priority: this.state.priority,
            dueDate: new Date()
        }
        this.setState(prev => ({
            items: [...prev.items, item]
        }))
    }
}