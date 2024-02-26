

const Card = (props) => {
    

    return (
        <>
           <div className="card">
                <h2>{props.name}</h2>
                <img src = "../assets/dorothy-height.jpg" alt = {props.name} className="image"/>
                <p>{props.website}</p>

           </div>
        </>
    )
}

export default Card;