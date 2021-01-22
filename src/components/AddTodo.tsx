import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';

const MIN_LENGTH = 10;
const MAX_LENGTH = 40;

const schema = yup.object().shape({
    title: yup.string()
        .required('Task title is required!')
        .min(MIN_LENGTH, 'Title must be at least 10 characters!')
        .max(MAX_LENGTH, 'Title must be at most 25 characters!'),
})

interface AddTodoForm {
    title: string;
}

const AddTodo = () => {

    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
        window.location.href = '/';
    }

    return (
        <div className="container">
            <form className="mt-4 mb-3" onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Enter with a title:</label>
                    <input type="text"
                        name="title" id="title"
                        className="form-control"
                        ref={register}
                        aria-describedby="emailHelp" />
                    <div className="text-danger mt-1">
                        <small>{errors.title?.message}</small>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary transition">Create</button>
            </form>
        </div>
    )
}

export default AddTodo;