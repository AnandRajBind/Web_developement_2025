//   props pass by destruting method.
/* function Button({name, roll, age}){
   return (
       <div>
           <h1>I am props Example.  name {name} roll={roll} and age={age}</h1>
       </div>
   );
}
export default Button;
*/

// recieve (handleLogin) function as a props
function Button({ text, handleLogin }) {

// child component function
    function submit() {
        // calling parent component  function in children component with argument
        handleLogin("argument");
    }
    return (
        <button onClick={submit}>{text}</button>
    )
}

export default Button;