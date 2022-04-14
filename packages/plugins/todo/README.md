# @todolist/plugin-todo

This plugin parses and outputs TODOs

## Setup

1.  Run:

    ```javascript
    # From your App directory
    npm install @todolist/plugin-todo
    ```

2.  Add the plugin todo:

In a file where to use todolist

    ```javascript
    import React, { FC } from 'react';
    import TodoList, {
    TodoListForm,
    useTodoList
    } from '@todolist/plugin-todo';

    const todos = [
        {
            id: 'a',
            title: 'a',
            checked: true
        },
        {
            id: 'b',
            title: 'b',
            checked: false
        }
    ]

    type CardProps = {
        todo: Todo;
    };

    const Card:FC = ({ todo }: CardProps) => {
        const [checked, setChecked] = React.useState(todo.checked);

        const onCheck = () => {
            setChecked(!checked);
        };

        return (
            <CheckProvider>
                <CheckBox onCheck={onCheck} />
                <p>{todo.title}</p>
            </CheckProvider>
        )
    }

    export default function TodoListPage() {
        return (
            <>
                <TodoListForm />
                <TodoList initialTodos={todos} CardComponent={Card} />
            </>
        )
    }
    ```
