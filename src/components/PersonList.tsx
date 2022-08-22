//working with array props that contains object
type Person_list = {
    name_list: {
        name: string,
        rollNo: number
    }[]; //the array at the last means we will receive array that containing objects which will have the given datatype
}


const PersonList = (props: Person_list) => {
    return (
        <div>

            {props.name_list.map((item, index) => {
                //we should give a key or it will throw error
                return (
                    <h2 key={index}>{item.name} and {item.rollNo}</h2>
                )
            })}
        </div>
    )
}

export default PersonList