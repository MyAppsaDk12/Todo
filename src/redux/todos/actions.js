import { httpClient } from "../../api"
import axios from 'axios';
import {GET_TODOS, SUCCESS_TODOS, ADD_TODOS, REMOVE_TODOS, SET_PAGE } from './types'
export const getTodos = (page) => async (dispatch, getState) => {
    dispatch({type: GET_TODOS})
    const data = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`).then(({data}) => data)
    dispatch({type: SUCCESS_TODOS, payload: data})  
}

export const addTodos = (item) => ({
    type: ADD_TODOS,
    payload: item
})

export const removeTodos = (item) => ({
        type: REMOVE_TODOS,
    payload: item
})
export const setPageTodos = (value) => ({
    type: SET_PAGE,
    payload: value
})