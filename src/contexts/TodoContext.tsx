import react, { createContext, useEffect, useState } from 'react';
import { Todo } from '../models/Todo';
import { get, post } from '../services/TodoService';
import { TodoContextType } from './TodoContextType';

export const TodoContext =
    createContext<TodoContextType>({
        todos: [],
        addTodo: () => { },
        removeTodo: () => { },
        toggle: () => { },
    });

const TodoProvider = (props: any) => {

    const [todos, setTodos] = useState<Todo[]>(get);

    useEffect(() => {
        post([...todos])
    }, [todos])

    const addTodo = (title: string) => {
        const todo: Todo = {
            id: todos.length + 1,
            title, done: false
        }

        setTodos([...todos, todo]);
    };

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter(i => i.id != todo.id));
    };

    const toggle = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todos[index].done;
        setTodos([...todos]);

    };

    const providerValues = () => {
        return {
            todos, addTodo, removeTodo, toggle
        }
    }

    return (
        <TodoContext.Provider value={providerValues()}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;