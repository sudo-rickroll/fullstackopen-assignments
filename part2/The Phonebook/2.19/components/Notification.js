import Success from "./Success"
import Error from "./Error"

const Notification = ({message}) => {
    const messageStyle = {
        color: 'black',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 5,
        marginBottom: 10
    }

    return (
        <>
            <Success message={message} style={messageStyle}/>
            <Error message={message} style={messageStyle}/>
        </>
    )
}

export default Notification