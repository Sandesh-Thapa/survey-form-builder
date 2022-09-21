import { ADD_FORM_ELEMENT, REMOVE_FORM_ELEMENT } from "../constants"

const formElementReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_FORM_ELEMENT:
            return [...state, action.payload]
        case REMOVE_FORM_ELEMENT:
            return state.filter(element => (element.id !== action.payload))
        default:
            return state
    }
}

export default formElementReducer