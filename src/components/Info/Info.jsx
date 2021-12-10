import { Link } from "react-router-dom";
//style
import "./style.css";

export default function Info(props) {
    let arr = props.item;
    return (
        <div className="wrapp_info">
           {arr.map((item, index) => (
            <Link key={index} to={`/${item.VariableId}`} className="wrapp_content" kye={index}>
                <h2>{item.Variable}</h2>
                <h3>{item.Value}</h3>
            </Link>
        ))}
        </div>
    )
}

