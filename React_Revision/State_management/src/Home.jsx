import React from 'react'
import style from './Home.module.css'
export const Home = () => {
  return (

    // This is external css.bydefault it is in App.css file.
    // 2 component me same class name(External css ke case me ) use nhi ker sakte hai. nhi to same css apply ho jayega dono component me. yadi same css rakhna hai to same ker sakte hai.
    //  isse bachane ke liye module css use kerte hai.
    //  module css me file name .module.css rakhte hai. or import krte hai.
    //  module css me class name same rakh sakte hai. dono component me same class name use ker sakte hai.
    // <div  class="codingHunger">Home</div>

    // module css use kerte hai.
    <div class={style.header} >Home</div>
  )
}
