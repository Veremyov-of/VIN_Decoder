const initialState = {
    search: '',
    linkResult: '',
    sortResult: [],
    result: [],
    history: [],
    variables: []
}

const INPUT_CHANGE = 'INPUT_CHANGE';
const SEARCH = 'SEARCH';
const SORT = 'SORT';
const HISTORY = 'HISTORY';
const VARIABLES = 'VARIABLES';

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case VARIABLES:
            return {
                ...state,
                variables: action.payload
            }


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
        case SORT:
            let link = ''
            const sortResult = state.result.filter(item => item.Value && item.Value !== '0' && item.Value[0] !== '0');
            if(sortResult.length !== 0) {
                link = state.search
            }
            return {
                ...state,
                sortResult: sortResult,
                linkResult: link,
                search: '',
                result: [],
            }
        case HISTORY:
            const arr = state.history;
            const linkText = state.linkResult;
            const index = arr.indexOf(arr.find(item => item.link === linkText));

            if(index !== -1) arr.splice(index, 1);

            if(arr.length === 5) {
                arr.shift();
                arr.push({
                    link: state.linkResult,
                    info: state.sortResult,
                });
            
            } else {
                arr.push({
                    link: state.linkResult,
                    info: state.sortResult,
                });
            }
            const newArr = [...arr];
            return {
                ...state,
                sortResult: [],
                linkResult: '',
                history: newArr,   
            }
            
            
        default:
            return state;
    }
}

export const handleChangeAction = (payload) => ({ type: INPUT_CHANGE, payload});
export const handleSubmitAction = (payload) => ({ type: SEARCH, payload });
export const variablesAdd = (payload) => ({ type: VARIABLES, payload });
export const sortAction = () => ({ type: SORT });
export const historyAction = () => ({ type: HISTORY })