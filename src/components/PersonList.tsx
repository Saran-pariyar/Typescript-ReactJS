//working with array props that contains object
type Person_list = {
    name_list: {
        name: string,
        rollNo: number
    }[];
}


const PersonList = (props: Person_list) => {
    return (
        <div>

            {props.name_list.map(item => {
                //we should give a key or it will throw error
                return (
                    <h2 key={item.name}>{item.name} and {item.rollNo}</h2>
                )
            })}
        </div>
    )
}

export default PersonList