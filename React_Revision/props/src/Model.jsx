
// recieve component (buttonComponent) as a props
// function Model({buttonComponent}) {
function Model({children}) {
    return (

        <div>

            
    <h1>This is Model Component</h1>
{/* render buttonComponent  */}
    {/* {buttonComponent } */}
    {children}
        </div>
    )
}

export default Model;