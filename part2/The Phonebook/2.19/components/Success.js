const Success = ({message, style}) => {
    const successMessageStyle ={
        ...style,
        color : 'green'
    }
    if ('success' in message){
        return (
            <div style={successMessageStyle}>
                {message.success}
            </div>
        )
    }

    return null
}

export default Success