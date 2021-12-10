//style
import { Link } from "react-router-dom";
import "./style.css";

export default function Variables(props) {
    let description = props.item.Description;
    if(description[0] === '<') {
        let newStr = '';
        for(let i = 0; i < description.length - 4; i++) {
            if(i > 2) {
                newStr += description[i];
            }
        }
        description = newStr;
    }
    return (
        <div className="info_container">
            <h1 className="title_NameVar">{props.item.Name}</h1>
            <h3 className="description">
                {description}
            </h3>
            <Link className='home_link' to="/">home</Link>
        </div>
    )
}

