import axios from "axios"
import { CHANGE_INPUT , ADD_ITEM, DELETE_ITEM , GET_LIST} from './actionTypes'
export const changInputAction = (inputValue) => ({
    type:CHANGE_INPUT,
    inputValue
})
export const addItemAction = () => ({
    type:ADD_ITEM
})
export const deleteItemAction = (index) => ({
    type:DELETE_ITEM,
    index
})


export const getListAction = (data) => ({
    type:GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res)
            const action = getListAction(res.data.data)
            dispatch(action)
            
        })
    }
}

