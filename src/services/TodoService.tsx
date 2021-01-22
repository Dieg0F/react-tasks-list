import { Todo } from "../models/Todo";

const TODO_STORE = 'todo';

export const get = (): Todo[] => {
    const data = localStorage.getItem(TODO_STORE) || '';
    try {
        const todos = JSON.parse(data) as Todo[];

        return todos;
    } catch {
        return [];
    }
}

export const post = (data: Todo[]) => {
    if (data?.length > 0) {
        localStorage.setItem(TODO_STORE, JSON.stringify(data));
    }
}