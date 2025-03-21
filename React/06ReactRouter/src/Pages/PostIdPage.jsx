import React from "react";
import { useParams, useSearchParams} from "react-router";

const PostIdPage = () => {
  const params = useParams(); // here useParams are hook.

  const [searchParams, setSearchParams] = useSearchParams();
  const onClickHandler=()=>{
    setSearchParams((pre)=>{
        pre.set("name","Anurag")
        return pre
    })
  }

  return (
    <>
      {/* <h1>Post Id= {params.id}</h1>
      <h1>PostIdPage{JSON.stringify(params)}</h1>
 */}

      <h1>Post Id Page {params.id ? params.id : 0}</h1>

      
          <h1>PostIdPage: {JSON.stringify(searchParams.get("name"))}</h1>
          <h1>PostIdPage: {JSON.stringify(searchParams.get("age"))}</h1>
          <h1>PostIdPage: {JSON.stringify(searchParams.get("village"))}</h1>
     <button onClick={onClickHandler}> Change Name </button>
    </>
  );
};
export default PostIdPage;
