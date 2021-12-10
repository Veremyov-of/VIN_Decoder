import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//style
import './style.css';

//AsyncAction
import { searchAction } from "../../store/asyncActions/search";


//Actions 
import { handleChangeAction } from "../../store/mainReducer";

//components

export default function Search() {
    const searchText = useSelector(state => state.data.search);
    const links = useSelector(state => state.data.history);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="container">
                <form className='search-form' onSubmit={(event) => dispatch(searchAction(event, searchText))}>
                    <input maxLength="17" minLength="17" className='search-input' onChange={(e) => dispatch(handleChangeAction(e.target.value))} value={searchText} type="text" placeholder="VIN"/>
                    <button className='search-btn' type="submit">Search</button>
                </form>
            </div>
            <div className="wrapp_links">
                {links.map((item, index) => (
                    <div className="inner_link" key={index}>
                        <Link className="link" to={`/${item.link}`}>{item.link}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}