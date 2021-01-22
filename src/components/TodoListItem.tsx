import react, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
    const { toggle, removeTodo } = useContext<TodoContextType>(TodoContext);
    const todo = props.todo;

    const onChanges = () => {
        toggle(todo);
    }

    const onRemove = () => {
        removeTodo(todo);
    }

    return (
        <tr>
            <th scope="row">
                <div className="form-check">
                    <input className="form-check-input"
                        type="checkbox" value=""
                        checked={todo.done}
                        onChange={onChanges} />
                </div>
            </th>
            <td>{todo.title}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-light hv-danger transition"
                    onClick={onRemove}>
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default TodoListItem;