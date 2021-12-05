const initialState = {
    search: '',
}

const INPUT_CHANGE = 'INPUT_CHANGE';
const SEARCH = 'SEARCH';

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case INPUT_CHANGE:
            return { ...state, search: action.payload }
        case SEARCH:
            if(state.search) {
                return {
                    ...state,
                    result: action.payload
                }
            }
            return state;

            
        default:
            return state;
    }
}

export const handleChangeAction = (payload) => ({ type: INPUT_CHANGE, payload});
export const handleSubmitAction = (payload) => ({ type: SEARCH, payload });