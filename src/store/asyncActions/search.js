import { handleSubmitAction, sortAction, historyAction } from "../mainReducer";
export const searchAction = (event, search) => {
    event.preventDefault();
    return function(dispatch) {
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${search}?format=json`)
            .then(response => response.json())
            .then(json => dispatch(handleSubmitAction(json.Results)))
            .then(() => dispatch(sortAction()))
            .then(() => dispatch(historyAction()))
            .catch(() => console.log('error'))
    }
}
