
import {Link} from "react-router"
import './Card.css'


const Card = (props) => {

    return (
        <div className="col">
            <Link to={`../Movies/${props.id}`} key={props.id}>
                <div className="card">
                    <img src={props.imgUrl}alt="placeholder img"className="img-fluid image card-img-top rounded" />
                    <div className="card-header">
                        <p className="card-text text-center">
                            Title: {props.title}
                        </p>
                        <p className="card-text text-center">
                            Director: {props.director}
                        </p>
                    </div>
                    <div className="card-body">

                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default Card