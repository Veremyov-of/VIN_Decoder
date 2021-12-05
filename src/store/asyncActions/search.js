import { handleSubmitAction } from "../mainReducer";

export const searchAction = (event, search) => {
    event.preventDefault();
    return function(dispatch) {
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${search}?format=json`)
            .then(response => response.json())
            .then(json => dispatch(handleSubmitAction(json.Results)))
            .catch(() => console.log('error'))
    }
}
