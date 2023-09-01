import mainBackground from '../../../assets/mainbg.png'
import mainSvg from '../../../assets/night.png'
import cancelButton from '../../../assets/cancel.png'
import yesImg from '../../../assets/yes.png'
import mainStyles from './main.module.css'
import { Header } from '../..'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const MainLayout = () => {
    const [context, setContext] = useState('');
    const [activeTodos, setActiveTodos]: any = useState([]);
    const [completedTodos, setCompletedTodos]: any = useState([]);
    const [count, setCount]: any = useState(0);
    const [state, setState]: any = useState('All');



    const addTodo = () => {
        if (context.trim() !== '') {
            setActiveTodos([context, ...activeTodos]);
            setContext('');
            setCount(count + 1);
        }
    }

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    const addCompletedTodo = (index: any) => {
        setCompletedTodos([activeTodos[index], ...completedTodos]);
        setActiveTodos(activeTodos.filter((_: any, i: any) => i !== index));
        setCount(count - 1);
    }

    const removeActiveTodo = (index: any) => {
        let newTodos = activeTodos.filter((_: string, i: number) => i !== index);
        setActiveTodos(newTodos);
        setCount(count - 1);
    }
    const removeCompletedTodo = (index: any) => {
        let newTodos = completedTodos.filter((_: string, i: number) => i !== index);
        setCompletedTodos(newTodos);
    }

    const clearCompletedTodos = () => {
        setCompletedTodos([]);
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${mainBackground})` }} className={mainStyles.container}>
                <div className={mainStyles.main}>
                    <Header>
                        <Link to='/darkmode'>
                            <img className={mainStyles.img} src={mainSvg} />
                        </Link>
                    </Header>
                    <input
                        className={mainStyles.input}
                        type='text'
                        value={context}
                        onChange={(e) => setContext(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder='Create a new todo...'
                    />

                    {
                        (activeTodos.length === 0 && completedTodos.length === 0) ? (
                            <div></div>
                        ) : ((state === 'All') ? (
                            <div>
                                <ul className={mainStyles.todolist}>
                                    {completedTodos.map((todo: any, index: any) => (
                                        <li key={index}>
                                            <div className={mainStyles.completedlistmain}>
                                                <div className={mainStyles.todomain}>
                                                    <div className={mainStyles.completedcheckbox}>
                                                        <img src={yesImg} />
                                                    </div >
                                                    {todo}
                                                </div>
                                                <div className={mainStyles.delete}>
                                                    <img onClick={() => removeCompletedTodo(index)} className={mainStyles.cancel} src={cancelButton} />
                                                </div>
                                            </div>
                                            <div className={mainStyles.horizontal}></div>
                                        </li>
                                    ))}
                                    {activeTodos.map((todo: any, index: any) => (
                                        <li key={index}>
                                            <div className={mainStyles.listmain}>
                                                <div className={mainStyles.todomain}>
                                                    <div className={mainStyles.checkbox}>
                                                        <div onClick={() => addCompletedTodo(index)} className={mainStyles.chckbxmain}></div>
                                                    </div>
                                                    {todo}
                                                </div>
                                                <div className={mainStyles.delete}>
                                                    <img onClick={() => removeActiveTodo(index)} className={mainStyles.cancel} src={cancelButton} />
                                                </div>
                                            </div>
                                            <div className={mainStyles.horizontal}></div>
                                        </li>
                                    ))}
                                    <div className={mainStyles.bottom}>
                                        <p>{count} items left</p>
                                        <div id={mainStyles.desktop} className={mainStyles.btns}>
                                            <button style={{
                                                color: '#3A7CFD'
                                            }} onClick={() => setState('All')}>All</button>
                                            <button onClick={() => setState('Active')}>Active</button>
                                            <button onClick={() => setState('Completed')}>Completed</button>
                                        </div>
                                        <button onClick={clearCompletedTodos}>Clear Completed</button>
                                    </div>
                                </ul>
                                <div id={mainStyles.mobile} className={mainStyles.btns}>
                                    <button style={{
                                        color: '#3A7CFD'
                                    }} onClick={() => setState('All')}>All</button>
                                    <button onClick={() => setState('Active')}>Active</button>
                                    <button onClick={() => setState('Completed')}>Completed</button>
                                </div>
                            </div>
                        ) : ((state === 'Active') ? (
                            <div>
                                <ul className={mainStyles.todolist}>
                                    {activeTodos.map((todo: any, index: any) => (
                                        <li key={index}>
                                            <div className={mainStyles.listmain}>
                                                <div className={mainStyles.todomain}>
                                                    <div className={mainStyles.checkbox}>
                                                        <div onClick={() => addCompletedTodo(index)} className={mainStyles.chckbxmain}></div>
                                                    </div>
                                                    {todo}
                                                </div>
                                                <div className={mainStyles.delete}>
                                                    <img onClick={() => removeActiveTodo(index)} className={mainStyles.cancel} src={cancelButton} />
                                                </div>
                                            </div>
                                            <div className={mainStyles.horizontal}></div>
                                        </li>
                                    ))}
                                    <div className={mainStyles.bottom}>
                                        <p>{count} items left</p>
                                        <div id={mainStyles.desktop} className={mainStyles.btns}>
                                            <button onClick={() => setState('All')}>All</button>
                                            <button style={{
                                        color: '#3A7CFD'
                                    }} onClick={() => setState('Active')}>Active</button>
                                            <button onClick={() => setState('Completed')}>Completed</button>
                                        </div>
                                        <button onClick={clearCompletedTodos}>Clear Completed</button>
                                    </div>
                                </ul>
                                <div id={mainStyles.mobile} className={mainStyles.btns}>
                                    <button onClick={() => setState('All')}>All</button>
                                    <button style={{
                                        color: '#3A7CFD'
                                    }} onClick={() => setState('Active')}>Active</button>
                                    <button onClick={() => setState('Completed')}>Completed</button>
                                </div>
                            </div>
                        ) : ((state === 'Completed') ? (
                            <div>
                                <ul className={mainStyles.todolist}>
                                    {completedTodos.map((todo: any, index: any) => (
                                        <li key={index}>
                                            <div className={mainStyles.completedlistmain}>
                                                <div className={mainStyles.todomain}>
                                                    <div className={mainStyles.completedcheckbox}>
                                                        <img src={yesImg} />
                                                    </div >
                                                    {todo}
                                                </div>
                                                <div className={mainStyles.delete}>
                                                    <img onClick={() => removeCompletedTodo(index)} className={mainStyles.cancel} src={cancelButton} />
                                                </div>
                                            </div>
                                            <div className={mainStyles.horizontal}></div>
                                        </li>
                                    ))}
                                    <div className={mainStyles.bottom}>
                                        <p>{count} items left</p>
                                        <div id={mainStyles.desktop} className={mainStyles.btns}>
                                            <button onClick={() => setState('All')}>All</button>
                                            <button onClick={() => setState('Active')}>Active</button>
                                            <button style={{
                                        color: '#3A7CFD'
                                    }} onClick={() => setState('Completed')}>Completed</button>
                                        </div>
                                        <button onClick={clearCompletedTodos}>Clear Completed</button>
                                    </div>
                                </ul>
                                <div id={mainStyles.mobile} className={mainStyles.btns}>
                                    <button onClick={() => setState('All')}>All</button>
                                    <button onClick={() => setState('Active')}>Active</button>
                                    <button style={{
                                        color: '#3A7CFD'
                                    }} onClick={() => setState('Completed')}>Completed</button>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        ))))
                    }
                </div>
            </div>
        </div>
    )
}


