import React from 'react';
import {Todo} from './Todo'
export class TodoList extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const inf = this.props.todoList.map((information, i) => {
            return(
                <Todo
                    key = {i}
                    text = {information.text}
                    priority = {information.priority}
                    dueDate = {information.dueDate}
                />
                );
        });

        return(
            <div>
                {inf}
            </div>
        );
    }
}