

const Card = (props) => {
    

    return (
        <>
           <div className="card">
                <h2>{props.name}</h2>
                <h3>{props.living}</h3>
                <a href = {props.link} target= "_blank" ><img src = {props.image} alt = {props.name} className="image"/></a>

           </div>
        </>
    )
}

export default Card;