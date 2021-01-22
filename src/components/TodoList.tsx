import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);

    return (
        <div className="container">
            <div className="mt-4 mb-3">
                <h4 className="fw-light">My Tasks</h4>
            </div>
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="col-11">Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(t => (<TodoListItem key={t.id} todo={t}></TodoListItem>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;