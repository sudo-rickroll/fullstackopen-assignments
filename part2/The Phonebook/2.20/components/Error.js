const Error = ({message, style}) => {
    const errorMessageStyle ={
        ...style,
        color : 'red'
    }
    if ('error' in message){
        return (
            <div style={errorMessageStyle}>
                <p>{message.error}</p>                
            </div>
        )
    }

    return null
}

export default Error