import mainSvg from '../../../assets/night.png'
import darkSvg from '../../../assets/sun.png'
import cancelButton from '../../../assets/cancel.png'
import yesImg from '../../../assets/yes.png'
import mainStyles from './main.module.css'
import { Header } from '../..'
import { useState } from 'react'

interface ContextProps {
    id: number;
    value: string;
    completed: boolean;
}

export const MainLayout = () => {
    const [context, setContext] = useState({
        id: 0,
        value: "",
        completed: false,
    });
    const [activeTodos, setActiveTodos] = useState<ContextProps[]>([]);
    const [count, setCount] = useState(0);
    const [state, setState]  = useState('All');
    const [completedTodo, setCompletedTodo] = useState<Number[]>([]);
    const [theme, setTheme] = useState("light");



    const addTodo = () => {
        if (context.value.trim() !== '') {
            setActiveTodos([context, ...activeTodos]);
            setContext({
                id: context.id + 1,
                value: "",
                completed: false,
            });
            setCount(count + 1);
        }
    }

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    const addCompletedTodo = (item : ContextProps) => {
        if(completedTodo.includes(item.id)){
            setCompletedTodo(completedTodo.filter((number) => number !== item.id));
            setCount(count + 1);
        } else {
            setCompletedTodo([...completedTodo, item.id]);
            setCount(count - 1);
        }
    }

    const removeActiveTodo = (index: number) => {
        let newTodos = activeTodos.filter((item: ContextProps) => item.id !== index);
        setActiveTodos(newTodos);
        if(!completedTodo.includes(index)){
            setCount(count - 1);
        }
    }

    const clearCompletedTodos = () => {
        for(let i = 0; i < completedTodo.length; i++){
            let newTodos = activeTodos.filter((item: ContextProps) => !completedTodo.includes(item.id));
            setActiveTodos(newTodos);
        }
        setCompletedTodo([]);
    }

    const darkModeHandler = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className={mainStyles.mainContainer} data-theme={theme}>
            <div className={mainStyles.container}>
                <div className={mainStyles.main}>
                    <Header modeHandler={darkModeHandler}>
                            {
                                theme === "light" ? <img className={mainStyles.img} src={mainSvg} /> : <img className={mainStyles.img} src={darkSvg} /> 
                            }
                    </Header>
                    <input
                        className={mainStyles.input}
                        type='text'
                        value={context.value}
                        onChange={(e) => setContext({
                            id: context.id,
                            value: e.target.value,
                            completed: false
                        })}
                        onKeyDown={handleKeyPress}
                        placeholder='Create a new todo...'
                    />

                    {
                        (activeTodos.length === 0) ? (
                            <div></div>
                        ) : (
                            <div>
                                <ul className={mainStyles.todolist}>
                                    {activeTodos.map((todo: ContextProps) => (
                                        <li key={todo.id} className={ state === "Active" ? (completedTodo.includes(todo.id) ? mainStyles.dNone : "") : (state === "Completed" ? (!completedTodo.includes(todo.id) ? mainStyles.dNone : "") : "")  } >
                                            <div className={ completedTodo.includes(todo.id) ? mainStyles.completedlistmain : mainStyles.listmain}>
                                                <div className={mainStyles.todomain}>
                                                    <div onClick={() => addCompletedTodo(todo)} className={ completedTodo.includes(todo.id)  ? mainStyles.completedcheckbox : mainStyles.checkbox}>
                                                       {completedTodo.includes(todo.id) ? <img src={yesImg} /> :  <div className={mainStyles.chckbxmain}></div> }
                                                    </div>
                                                    {todo.value}
                                                </div>
                                                <div className={mainStyles.delete}>
                                                    <img onClick={() => removeActiveTodo(todo.id)} className={mainStyles.cancel} src={cancelButton} />
                                                </div>
                                            </div>
                                            <div className={mainStyles.horizontal}></div>
                                        </li>
                                    ))}
                                    <div className={mainStyles.bottom}>
                                        <p>{count} items left</p>
                                        <div id={mainStyles.desktop} className={mainStyles.btns}>
                                            <button className={state === 'All' ? mainStyles.activState : mainStyles.grey} onClick={() => setState('All')}>All</button>
                                            <button className={state === 'Active' ? mainStyles.activState : mainStyles.grey} onClick={() => setState('Active')}>Active</button>
                                            <button className={state === 'Completed' ? mainStyles.activState : mainStyles.grey} onClick={() => setState('Completed')}>Completed</button>
                                        </div>
                                        <button onClick={clearCompletedTodos}>Clear Completed</button>
                                    </div>
                                </ul>
                                <div id={mainStyles.mobile} className={mainStyles.btns}>
                                    <button className={state === 'All' ? mainStyles.activState : mainStyles.grey} onClick={() => setState('All')}>All</button>
                                    <button className={state === 'Active' ? mainStyles.activState : mainStyles.grey} onClick={() => setState('Active')}>Active</button>
                                    <button className={state === 'Completed' ? mainStyles.activState : mainStyles.grey} onClick={() => setState('Completed')}>Completed</button>
                                </div>
                            </div> )
                    }
                </div>
            </div>
        </div>
    )
}


