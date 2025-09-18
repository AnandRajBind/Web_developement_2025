
// recieve component (buttonComponent) as a props

import Button from "./Function_props";

// function Model({buttonComponent}) {
function Model(props) {
    return (

        <div>

            
    <h1>This is Model Component {props.data}</h1>
{/* render buttonComponent  */}
    {/* {buttonComponent } */}



    {props.children}

<Button data={props.data} text={"Submit"}/>
        </div>
    )
}

export default Model; 