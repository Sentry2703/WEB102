import '../App.css'

const Post = (props) => {

    return(
        <section style = {{ border: '3px solid red', margin: '5px'}}> 
            <h3> {props.name} </h3>
            <h4> {props.description}</h4>
            <h4> Rating: {props.likes}</h4>
        </section>
        
    )
}

export default Post