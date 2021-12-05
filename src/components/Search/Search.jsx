import { useDispatch, useSelector } from "react-redux";

//AsyncAction
import { searchAction } from "../../store/asyncActions/search";


//Actions 
import { handleChangeAction } from "../../store/mainReducer";

export default function Search() {
    const searchText = useSelector(state => state.data.search) 
    const dispatch = useDispatch();
    return (
        <div>
            <form className='search-form' onSubmit={(event) => dispatch(searchAction(event, searchText))}>
                <input className='search-input' onChange={(e) => dispatch(handleChangeAction(e.target.value))} value={searchText} type="text" placeholder="VIN"/>
                <button className='search-btn' type="submit">Search</button>
            </form>
            <h1>1FTFW1CT5DFC10312</h1>
        </div>
    )
}