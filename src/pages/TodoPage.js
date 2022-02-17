import React from "react";
import TodoList from "../components/TodoList"
import { getTodos } from "../redux/todos/actions";
import {useDispatch, useSelector } from "react-redux";
import {Pagination} from "react-bootstrap"
import Header from "../components/Header";

import TodoAdd from "../components/TodoAdd";
export default function TodoPage() {

    const link = {
        home: '/',
        todo: '/todo'
    }
const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getTodos())
    }, [])

    const {todos} = useSelector(state=>state.todo)
     let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} onClick={() => dispatch(getTodos(number))}>
          {number}
        </Pagination.Item>,
      );
    }

    return <>
      <Header title={'Главная'}  link={link}/>
    <TodoList list={todos}/>
    <TodoAdd/>
    <Pagination size="sm">{items}</Pagination>
    </>;
}