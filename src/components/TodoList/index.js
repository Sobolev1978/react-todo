import Todo from "./Todo";
import './style.scss';
import {useMemo, useState} from "react";
import InputPanel from "./InputPanel";
import ButtonPanel from "./ButtonPanel";
import {FILTER_TYPE_TODO, FILTER_TYPE_COMPLETED} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {addTask, changeFilter, checkAll, checkTask, deleteCompleted, deleteTask} from "../../actions";

const TodoList = () => {
    const {tasks, filter} = useSelector(state => state)
    const dispatch = useDispatch()
    // const [tasks, setTasks] = useState([]);
    // const [filter, setFilter] = useState(FILTER_TYPE_ALL);
    const addTodoHandler = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            // setTasks([...tasks, {id: Date.now(), name: e.target.value, checked: false}])
            dispatch(addTask(e.target.value))
            e.target.value = "";
        }
    }

    const deleteTaskHandler = (id) => () => {
        dispatch(deleteTask(id))
        // setTasks(tasks.filter(task => task.id !== id))
    }

    const checkTaskHandler = (id) => () => {
        dispatch(checkTask(id))
        // setTasks(tasks.map((task) => {
        //     if (id === task.id) {
        //         return {...task, checked: !task.checked}
        //     }
        //     return task
        // }))
    }

    const deleteCompletedHandler = () => {
        dispatch(deleteCompleted())
        // setTasks(tasks.filter((task) => !task.checked))
    }

    const uncheckedCounter = useMemo(() => {
        return tasks.reduce((acc, task) => {
            if (!task.checked) {
                return acc + 1;
            }
            return acc;
        }, 0)
    }, [tasks])

    const checkedTaskCounter = useMemo(() => tasks.length - uncheckedCounter, [tasks, uncheckedCounter]);

    const checkAllHandler = () => {
        dispatch(checkAll())
        // setTasks(tasks.map((task) => {
        //         if (!task.checked) {
        //             return {...task, checked: true};
        //         }
        //         return task;
        //     })
        // )
    }

    const filterTasks = useMemo(() => {
        switch (filter) {
            case FILTER_TYPE_TODO:
                return tasks.filter((task) => !task.checked);
            case FILTER_TYPE_COMPLETED:
                return tasks.filter((task) => task.checked);
            default:
                return tasks;
        }
    }, [tasks, filter]);

    const changeFilterHandler = (newFilter) => () => {
        dispatch(changeFilter(newFilter))
        // setFilter(newFilter)
    }

    return (
        <div>
            <InputPanel onKeyDown={addTodoHandler} type='text' name='name'
                        placeholder='Enter your task name here'/>
            <ul className={'todo_list'}>
                {filterTasks.map((task) => {
                    return <Todo name={task.name} checkTask={checkTaskHandler(task.id)} key={task.id} checked={task.checked}
                                 deleteTask={deleteTaskHandler(task.id)}/>
                })}
            </ul>
            {tasks.length ?
                <ButtonPanel deleteCompleted={deleteCompletedHandler}
                             checkAll={checkAllHandler}
                             checkedTaskCounter={checkedTaskCounter}
                             uncheckedCounter={uncheckedCounter}
                             filter={filter}
                             onChangeFilter={changeFilterHandler}/> : null}
        </div>
    )
}


export default TodoList