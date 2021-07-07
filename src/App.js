import './App.scss';
import TodoList from "./components/TodoList";

function App() {
    return (
        <>
            <h1 className={'todo_title'}>Your todo list</h1>
            <div className={'todo_block'}>
                <TodoList/>
            </div>
        </>
    )
}

export default App;
