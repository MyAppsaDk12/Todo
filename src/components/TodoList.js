import React from "react";
import {Form, Button, ListGroup} from 'react-bootstrap'
import { addTodos, removeTodos } from '../redux/todos/actions';
import {useDispatch } from "react-redux";


export default function TodoList({list}){
  const dispatch = useDispatch()
  const [active, setActive] = React.useState(false)
  const [newState, setNewState] = React.useState(list)

  const handleDelete = (value) => {
    dispatch(removeTodos(value))
}

  React.useEffect(() =>{
    setNewState(list)
  }, [list])

  const handleClick = (index) => {
    const updateList = [...newState]
    const payload = {...updateList[index], completed: active}
    updateList[index] = payload
    setNewState(updateList)
  }
  const handleChange = (item, index) => {
    const updateList = [...newState]
    updateList[index] = {...updateList[index], title:item.text}
    setNewState(updateList)
  }
    return <>
    <ListGroup as="ul">
    {newState.map((item, index) =>(
        <div key={index}>
        <Form.Group as="li" onClick={()=>{
          setActive(prevState=>!prevState)
          handleClick(index)
        }}>
          <Form.Control onChange={(e)=>handleChange({text: e.target.value}, index)} value={item.title} />
        </Form.Group>
        <Button variant="primary" onClick={()=>handleDelete(item)}>
    Delete
  </Button>
      </div>
    ))}
    </ListGroup>
    </>
}