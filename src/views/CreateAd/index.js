import { useState } from "react";

import { postAd } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

function CreateAd(props) {
   const navigate = useNavigate();
  const [values, setvalues] = useState({
    title: "",
    price: "",
 image:"",
producttype:"",
    description: "",
    location: "",
  });
  console.log("values",values);

  const setState = (key, value) => {
    setvalues({ ...values, [key]: value });
  };

  return (
    <>
      <h1>This is Create Ad page</h1>
      <div className="main-2">
      <input
        placeholder="Ad Title"
        onChange={(e) => setState("title", e.target.value)}
        value={values.title}
        
      />
      <input
        placeholder="price"
        onChange={(e) => setState("price", e.target.value)}
        value={values.price}
      />
          <input
        placeholder="product type"
      
        onChange={(e) => setState("producttype", e.target.value)}
        value={values.producttype}
    
      />
      <input
        placeholder="image"
        onChange={(e) => setState("image", e.target.files)}
        type="file"
      

       
       
        
      />
      <input
        placeholder="description"
        onChange={(e) => setState("description", e.target.value)}
        value={values.description}
      />
      <input
        placeholder="location"
        onChange={(e) => setState("location", e.target.value)}
        value={values.location}
      />
      <button
        onClick={async () => {
          const response = await postAd(values);
          if (response.status === "error") {
            alert(response.error);
          } else {
           
              
            alert("success");

            navigate("/Dashboard")
          }
        }}
      >
        Post Ad
      </button> 
     







      
      <button
     onClick={() => {
      navigate("/dashboard")
       
        }}
       >
        go to Dashboard
        </button>
        </div>




     
    </>
  );
}
export default CreateAd;
