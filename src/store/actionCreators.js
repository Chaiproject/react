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