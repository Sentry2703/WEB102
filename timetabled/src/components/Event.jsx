const Event = (props) => {

    return (
        <td className="Event" style = {{ backgroundColor: props.color}}>
            <h5>{props.event} </h5>
            <h6>{props.location}</h6>
        </td>
    )
}

export default Event