import darkBackground from '../../../assets/darkbg.png'
import darkSvg from '../../../assets/sun.png'
import darkStyles from './dark.module.css'
import cancelButton from '../../../assets/cancel.png'
import yesImg from '../../../assets/yes.png'
import { Header } from '../../task-28/todo-app/src/components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const DarkLayout = () => {
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
    <div className={darkStyles.body}>
      <div style={{ backgroundImage: `url(${darkBackground})` }} className={darkStyles.container}>
        <div className={darkStyles.main}>
          <Header>
            <Link to='/'>
              <img className={darkStyles.img} src={darkSvg} />
            </Link>
          </Header>
          <input
            className={darkStyles.input}
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
                <ul className={darkStyles.todolist}>
                  {completedTodos.map((todo: any, index: any) => (
                    <li key={index}>
                      <div className={darkStyles.completedlistmain}>
                        <div className={darkStyles.todomain}>
                          <div className={darkStyles.completedcheckbox}>
                            <img src={yesImg} />
                          </div >
                          {todo}
                        </div>
                        <div className={darkStyles.delete}>
                          <img onClick={() => removeCompletedTodo(index)} className={darkStyles.cancel} src={cancelButton} />
                        </div>
                      </div>
                      <div className={darkStyles.horizontal}></div>
                    </li>
                  ))}
                  {activeTodos.map((todo: any, index: any) => (
                    <li key={index}>
                      <div className={darkStyles.listmain}>
                        <div className={darkStyles.todomain}>
                          <div className={darkStyles.checkbox}>
                            <div onClick={() => addCompletedTodo(index)} className={darkStyles.chckbxmain}></div>
                          </div>
                          {todo}
                        </div>
                        <div className={darkStyles.delete}>
                          <img onClick={() => removeActiveTodo(index)} className={darkStyles.cancel} src={cancelButton} />
                        </div>
                      </div>
                      <div className={darkStyles.horizontal}></div>
                    </li>
                  ))}
                  <div className={darkStyles.bottom}>
                    <p>{count} items left</p>
                    <div id={darkStyles.desktop} className={darkStyles.btns}>
                      <button style={{
                        color: '#3A7CFD'
                      }} onClick={() => setState('All')}>All</button>
                      <button onClick={() => setState('Active')}>Active</button>
                      <button onClick={() => setState('Completed')}>Completed</button>
                    </div>
                    <button onClick={clearCompletedTodos}>Clear Completed</button>
                  </div>
                </ul>
                <div id={darkStyles.mobile} className={darkStyles.btns}>
                  <button style={{
                    color: '#3A7CFD'
                  }} onClick={() => setState('All')}>All</button>
                  <button onClick={() => setState('Active')}>Active</button>
                  <button onClick={() => setState('Completed')}>Completed</button>
                </div>
              </div>
            ) : ((state === 'Active') ? (
              <div>
                <ul className={darkStyles.todolist}>
                  {activeTodos.map((todo: any, index: any) => (
                    <li key={index}>
                      <div className={darkStyles.listmain}>
                        <div className={darkStyles.todomain}>
                          <div className={darkStyles.checkbox}>
                            <div onClick={() => addCompletedTodo(index)} className={darkStyles.chckbxmain}></div>
                          </div>
                          {todo}
                        </div>
                        <div className={darkStyles.delete}>
                          <img onClick={() => removeActiveTodo(index)} className={darkStyles.cancel} src={cancelButton} />
                        </div>
                      </div>
                      <div className={darkStyles.horizontal}></div>
                    </li>
                  ))}
                  <div className={darkStyles.bottom}>
                    <p>{count} items left</p>
                    <div id={darkStyles.desktop} className={darkStyles.btns}>
                      <button onClick={() => setState('All')}>All</button>
                      <button style={{
                    color: '#3A7CFD'
                  }} onClick={() => setState('Active')}>Active</button>
                      <button onClick={() => setState('Completed')}>Completed</button>
                    </div>
                    <button onClick={clearCompletedTodos}>Clear Completed</button>
                  </div>
                </ul>
                <div id={darkStyles.mobile} className={darkStyles.btns}>
                  <button onClick={() => setState('All')}>All</button>
                  <button style={{
                    color: '#3A7CFD'
                  }} onClick={() => setState('Active')}>Active</button>
                  <button onClick={() => setState('Completed')}>Completed</button>
                </div>
              </div>
            ) : ((state === 'Completed') ? (
              <div>
                <ul className={darkStyles.todolist}>
                  {completedTodos.map((todo: any, index: any) => (
                    <li key={index}>
                      <div className={darkStyles.completedlistmain}>
                        <div className={darkStyles.todomain}>
                          <div className={darkStyles.completedcheckbox}>
                            <img src={yesImg} />
                          </div >
                          {todo}
                        </div>
                        <div className={darkStyles.delete}>
                          <img onClick={() => removeCompletedTodo(index)} className={darkStyles.cancel} src={cancelButton} />
                        </div>
                      </div>
                      <div className={darkStyles.horizontal}></div>
                    </li>
                  ))}
                  <div className={darkStyles.bottom}>
                    <p>{count} items left</p>
                    <div id={darkStyles.desktop} className={darkStyles.btns}>
                      <button onClick={() => setState('All')}>All</button>
                      <button onClick={() => setState('Active')}>Active</button>
                      <button style={{
                    color: '#3A7CFD'
                  }} onClick={() => setState('Completed')}>Completed</button>
                    </div>
                    <button onClick={clearCompletedTodos}>Clear Completed</button>
                  </div>
                </ul>
                <div id={darkStyles.mobile} className={darkStyles.btns}>
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