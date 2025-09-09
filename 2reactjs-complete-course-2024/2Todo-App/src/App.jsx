import React, { useEffect, useState } from 'react'
import TodoItem from './components/todo-items'
import TodoDetails from './components/todo-details'
import { Skeleton } from '@mui/material'

const App = () => {

  const [todoList,setTodoList] = useState([])
  const [loading ,setLoading] = useState(false)
  const [errorMsg,setErrorMsg] = useState(null)
  const [todoDetails,setTodoDetails] = useState(null)
  const [openDialog,setOpenDialog] = useState(false)


  async function fetchListOfTodos(){
    try {
      setLoading(true)
      const apiResponse = await fetch('https://dummyjson.com/todos')
      const result = await apiResponse.json()
      console.log(result)

      if(result?.todos && result?.todos.length>0){
        setTodoList(result?.todos)
        setLoading(false)
        setErrorMsg('')
      }else{
        setTodoList([])
        setLoading(false)
        setErrorMsg("")  
      }

    } catch (error) {
      console.log(error)
      setErrorMsg("Some error occured")
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
    // console.log(getCurrentTodoId)
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
      const details = await apiResponse.json()
      // console.log(details)
      if(details){
        setTodoDetails(details)
        setOpenDialog(true)
      }else{
        setTodoDetails(null)
        setOpenDialog(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchListOfTodos()
  },[])

  if(loading) return <Skeleton variant='rectangular' width={650} height={650}/>

  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold'>Simple Todo App using Material UI</h1>
      <div className='grid gap-2 grid-cols-4'>
        {
          todoList && todoList.length>0 ?
          todoList.map(todoItem=><TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem}/>):null
        }
      </div>
      <TodoDetails openDialog={openDialog} todoDetails={todoDetails} setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails}/>
    </div>
  )
}

export default App
