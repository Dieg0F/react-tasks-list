import react from 'react';
import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/styles/style.scss'

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/create">
                        <AddTodo></AddTodo>
                    </Route>
                    <Route path="/">
                        <TodoList></TodoList>
                    </Route>
                </Switch>
            </Router>
        </TodoContext>
    )
}

export default App;