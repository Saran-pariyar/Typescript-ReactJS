//props is a object, that's why we can use destructuring in it
//we have to make type for it now
//! we have to pass the value of the given props from parent component or else it will throw error!

type Greet_props = {
    name: string,
    messageCount: number,
    hero: "iron-man" | "hulk" //we're using literal types so that we can only pass these 3 values
}

//we made the type of the props to Greet_props so that
const Greet = (props: Greet_props) => {
    return (
        <div>
            <p>
            Hello {props.name}! You have {props.messageCount} messages.
            </p>
            {
                props.hero === "hulk" ? <p>You can swing </p> : <p>You can fly</p>
            }

        </div>
    )
}

export default Greet