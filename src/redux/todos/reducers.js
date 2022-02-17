import { addToArray, removeFromArray } from '../../services/services'
import {GET_TODOS, SUCCESS_TODOS, ERRORS_TODOS, REMOVE_TODOS, ADD_TODOS, EDIT_TODOS,SET_PAGE} from './types'

const initialState = {
    isLoading: false,
    isLoaded: false,
    isErrors: false,
    todos: [],
    page: 1
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                isErrors: false,
                todos: []
            }

        case SUCCESS_TODOS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                isErrors: false,
                todos: action.payload
            }
            case ERRORS_TODOS:
                return {
                    ...state,
                    isLoading: false,
                    isLoaded: false,
                    isErrors: true,
                    todos: []
                }
                case EDIT_TODOS:
                    return {
                        todos: []
                    }
            case ADD_TODOS:
                return {
                    ...state,
                    todos: addToArray(state.todos, action.payload)
                }
                case REMOVE_TODOS:
                    return {
                        ...state,
                        todos: removeFromArray(state.todos, action.payload)
                    }
                    case SET_PAGE:
                        return {
                            ...state,
                            page: action.payload
                        }

                default: return state
    }

}

export default reducer