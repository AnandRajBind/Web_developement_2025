import Model from './Model.jsx'
import Button from './Function_props.jsx';
// component as a props. Home component is parent component and Model is child component.and Model component is passed as a props in Home component.
function Home({data}) {
    return (
        <div>
            <p>This is from Home Page </p>
            {/* Button comonent pass as a propes in Model Component */}

            {/* Method 1 */}
            {/* <Model buttonComponent={<Button text={"Submit"} />} /> */}

            {/* Method 2  default props*/}

            {/* <Model data={"codingHunger"} >
                <div>Hi this is inside Model</div>
                <Button text={"Submit"} />
            </Model> */}
            {/*Props drilling  */}
            <Model data={data} >
                <div>Hi this is inside Model</div>
            </Model>
        </div>
    )
}
export default Home;
