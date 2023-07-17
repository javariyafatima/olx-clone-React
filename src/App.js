import Singup from "./views/Signup";
import {useState,useEffect} from "react"

import Login from "./views/Login";


import Dashboard from "./views/Dashboard";

import "./App.css"

import Layout from "./views/Layout";
import ErrorPage from"./views/ErrorPage";
import Detail from "./views/Detail";



import { Routes,Route } from "react-router";
import CreateAd from "./views/CreateAd";
import {    useNavigate} from "react-router-dom";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Provider } from 'react-redux';
import store from './store';
import CartPage from './CartPage';

function App (){
  const navigate = useNavigate();


  const [user, setUser] = useState();


  useEffect(() => {
   
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        navigate("/dashboard")
      } else {
        setUser(null);
        navigate("/")
      }
    });
  }, []);
  return(
    <>
 

   
   
   <div className="App">
  
   <Provider store={store}>
    <Routes>
            <Route path="/" element={<Layout />}>
            
              <Route path="/login" element={<Login />} />
              <Route path="/CartPAge" element={<CartPage />} />
              <Route path="/signup" element={<Singup />} />
              <Route path="/Dashboard" element={<Dashboard user={user}/>} />
              <Route path="/createAd" element={<CreateAd/>} />
              <Route path="/detail/:docId/:title/:price/:location/:description/" element={<Detail />} />

             
             
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
          </Provider>
          
          </div>
    </>
  )
}
export default App;


