import { Singupform } from "../../config/firebase";

import {    useNavigate,} from "react-router-dom";
import {useState} from "react"
import Swal from "sweetalert2"

function Singup(){

   const navigate = useNavigate();
   
  const [values, setvalues] = useState({
    name: "",
    email:"",
    password: "",
    conformPassword:"",
    image:"",
  
  });
 

  const setState = (key, value) => {
    setvalues({ ...values, [key]: value });
  };




  return (
    <>
    
    <div className="main-1">
        <div className="singup">
        <h1>Welcome To OLX</h1>
 
      <div className="singupdisplay">
      <h1>This is Signup page</h1>
      <input id="input"
        placeholder="name"
        onChange={(e) => setState("name", e.target.value)}
        value={values.name}
      />
      <input id="input"
        placeholder="email"
        onChange={(e) => setState("email", e.target.value)}
        value={values.email}
      />
     
      <input id="input"
        placeholder="password"
        onChange={(e) => setState("password", e.target.value)}
        value={values.password}
      />
      <input  id="input"
        placeholder="password"
        onChange={(e) => setState("conformPassword", e.target.value)}
        value={values.conformPassword}
      />
      <input
        placeholder="image"
        onChange={(e) => setState("image", e.target.files)}
        type="file"
      

       
       
        
      />

      <button
        onClick={async () => {
          const response = await Singupform(values);
          
          if (response.status === "error") {
            Swal.fire({
            title: response.error,
           
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',

           

            
        })
        
          } else {
            Swal.fire({
              title: "sucess",
             
              icon: 'sucess',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
  
             
  
              
          })
            

            navigate("/login")
        
          
          
           

          }
        }}
      >
        Signup
      </button>

     </div>

      </div>

      </div>
     
    </>
  );
}

export default Singup;