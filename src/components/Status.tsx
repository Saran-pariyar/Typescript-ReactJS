type StatusProps = {
    status: string
    //we made loading percent have optional values
    loadingPercent?: string
}

const Status = (props: StatusProps) => {
    //using optional props, the loadingPercent will have default value of "O" 
    const { loadingPercent = "0" } = props
    let message
    if (props.status === 'loading') {
        message = 'Loading ....'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    } else if (props.status === 'error') {
        message = 'Error fetching data'
    }


    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}

export default Status