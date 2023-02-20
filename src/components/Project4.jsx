import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/photos";

export default function Project4() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);



  if (!post) return "Fetching ....";

  return (
    <div>
      <main>
      <h3 style={{color:"darkred",margin:30}}>Fetching photos list using Axios</h3>
      <ul className="containerPics" >
       {
       
       post && post.length > 0 && post.map((userObj, index) =>
        (
          <li key={index} >
            <h5>{userObj.id}</h5>
            {/* <h4>Title : {userObj.title}</h4> */}
            <img src={userObj.url} width={200} height={100} alt="apiimage"/>
            
            
          </li>
        )     
                                          )
       }
      </ul>
    </main>
    </div>
  );
}