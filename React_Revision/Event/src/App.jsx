
import './App.css'

function App() {
  let isLogin = true;

  const checkLogin = () => {

    if (isLogin) {
      return <h1>Welcome user</h1>

    } else {
      return <h1>Login First</h1>
    }
  }

  // list
  // var listData = ["Apple", "Banana", "Mango"]
  // list data in key value form 
  /*
var listData=[
{
  name:"apple",
  quantity:2
},
{
  name:"mango",
  quantity:5
},
{
  name:"Banana",
  quantity:2
},
{
  name:"Papaya",
  quantity:6
}
]
var listData=[
{
  name:"apple",
  quantity:2
},
{
  name:"mango",
  quantity:5
},
{
  name:"Banana",
  quantity:2
},
{
  name:"Papaya",
  quantity:6
}
]
*/

  var listData = [
    {
      name: "Fruit",
      data:["Apple", "Banan", "Mango"]
    },
    {
      name: "Vegetable",
      data:["Tomamto", "Potato", "Brinjal"]
    },
    {
      name: "Snacks",
      data:["Pizza", "Samosa", "Burger"]
    }
  ]
  

  // arrow function 
  //  const handleClick = () => {
  //     alert("Button Clicked")
  //   }

  // ananymous function 
  //  const handleOnchange=function(e){
  // console.log(e)
  //  }

  // const handleSubmit = (e, val) => {
  //   e.preventDefault()
  //   console.log(val);

  // }

  return (
    <div>
      {/* onclick event */}
      {/* <h1 onClick={handleClick}>Hello Developer</h1> */}

      {/* onchange */}
      {/* <input type="text" onChange={handleOnchange} name='input field' value={"Anand"}  placeholder='Enter Your Name'/> */}


      {/* pass the argumet on the submit form. by using arrow function*/}
      {/* <form onSubmit={(e)=>handleSubmit(e,"hii")}>  */}
      {/* <form onSubmit={handleSubmit()}>
        <input type="text" placeholder='Enter your name' />
        <button type='submit'>Submit</button>
      </form> */}


      {/* Conditional rendering using if else */}

      {checkLogin()}
      {/* Conditional rendering using ternery operator */}

      {isLogin ? <div>Logging... the user  </div> : <div>Not Logging the user </div>}


      {/* list and keys in  */}

      {/* {
        listData.map((item, index) => {
           return (

            <div>
              <div>lint item is:  {item} </div>
              <div>list index is:  {index} </div>
            </div>
          )
        })
      } */}


      {
        listData.map((item, index) => {
          return (
            <div key={index}>
              <div>list item is:  {item.name} </div>
              {/* <div>list quantity is:  {item.quantity} </div> */}
              {
                item.data.map((data, index) => {
                  return (
                    <h2 key={index + "56"}>{data}</h2>
                  )
                })
              }

            </div>
          )
        })
      }
    </div>
  )
}

export default App
