import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {useDispatch } from "react-redux";
import { addTodos, removeTodos } from '../redux/todos/actions';

export default function  TodoAdd () {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState({
        id: new Date(),
        text: '',
        title: '',
        completed: false
    })

    const handleClick = () => dispatch(addTodos(value))
 



    return (
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Title" onChange={(e)=>setValue(prevState=> ({...prevState, title: e.target.value}))}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" onChange={(e)=>setValue(prevState=> ({...prevState, text: e.target.value}))} placeholder="Text" />
  </Form.Group>
  <Button variant="primary" onClick={handleClick}>
    Submit
  </Button>
 
</Form>
    )
}