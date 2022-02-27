import { useEffect, useMemo, useState } from 'react'
import Layout from '../components/Layout'
import type { ITodoItem } from '../interfaces/todo'

const TodoItem = (props: ITodoItem & {
  toogleDone: (id: number) => void
}) => {
  const toogleDone = () => {
    props.toogleDone(props.id)
  }

  return (
    <li className="flex w-[14rem] mb-2">
      <p className="text-gray-500 flex-1 truncate">{props.title}</p>
      <span className="cursor-pointer" onClick={toogleDone}>{!props.completed ? <p className=" text-green-500">√</p> : <i className=" text-red-500">x</i>}</span>
    </li>
  )
}

let uid = 0

const initailTodos: ITodoItem[] = [
  {
    id: ++uid,
    title: 'Learn Next.js',
    completed: false,
  },
  {
    id: ++uid,
    title: 'Read the docs',
    completed: true,
  },
]

export default function Home() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const leftCount = useMemo(() => {
    return todos.filter(todo => !todo.completed).length
  }, [todos])

  const title = useMemo(() => {
    return `${leftCount} item${leftCount > 1 ? 's' : ''} left`
  }, [leftCount])

  useEffect(() => {
    setTodos(initailTodos)
    return () => {
      setInput('')
      setTodos([])
    }
  }, [])

  const addTodo = () => {
    if (!input.trim()) return
    const newTodos = [...todos, { id: ++uid, title: input, completed: false }]
    setTodos(newTodos)
    setInput('')
  }

  const toogleDone = (id: number) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  return <Layout title="Todo List">
    <div className="w-screen h-screen bg-warm-gray-500 p-6">
      <h1 className="mb-6">{title}</h1>
      <ul>
        {
          todos.map((todo: ITodoItem) => {
            return <TodoItem toogleDone={toogleDone} key={todo.id} {...todo} />
          })
        }
      </ul>
      <div className="flex mt-4">
        <input onKeyUp={(e) => {
          if (e.keyCode === 13) addTodo()
        }} className="mr-4 border border-indigo-200" value={input} onInput={e => setInput(e.currentTarget.value)} type="text" />
        <button onClick={addTodo} className="ring">add</button>
      </div>
    </div>
  </Layout>
}
