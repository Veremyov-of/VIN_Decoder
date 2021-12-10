import { variablesAdd } from "../mainReducer";

export const variablesAddAction = () => {
    return function(dispatch) {
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
            .then(response => response.json())
            .then(json => dispatch(variablesAdd(json.Results)))
            .catch(() => console.log('error'))
    }
}
