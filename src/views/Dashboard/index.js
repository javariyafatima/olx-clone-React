import { useEffect, useState } from "react";
import {isUserAvailable, logoutUser, getAlldatauser,getDocs, myads,getUserName} from "../../config/firebase";

import { useNavigate } from "react-router-dom";




function Dashboard(props) {
 console.log(props)
  const navigate = useNavigate();
  
   

  const [currentUserUid, setCurrentUserUid] = useState()
  const [userName, setUserName] = useState()
  
  const [data, setData] = useState([]);
  


  const [filteredAds, setFilteredAds] = useState([]);
  const [query, setQuery] = useState("");

  
  const getData = async () => {
   
    const res = await myads();
    setData(res.data);
    setFilteredAds(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    setQuery(value);
    const filtered = data.filter((ad) =>
      ad.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAds(filtered);
  };






  


       return (
  <>

 
  

<div  className="Dashboard">


        
        

<h1>Dashboard</h1>
    
<h1>Welcome, 
{props.user.email}
</h1>


 <button
       onClick={() => {
         navigate("/createAd");
       }}        >
         Create Ad
</button>

<button
          onClick={async () => {
            await logoutUser();
          }}
        >
          logout
        </button>
      </div>

      <h1>My Ads</h1>
      <div className= "disply-card">
          
         
          {filteredAds.map((ad) => {
            return (
    
              
              
      
                   
        <div className="main">
           
                      
                    <div class="box-1">
                        
                        <a href="./style.css">
                        <div class="box-1img">
                            
                    <img src={ad.image}/>
                            
                            
                            
                            
            
                        
                        
                
            
                        </div>
                    <div class="box-1p">
                        
                        <p class="p-1"> Title: {ad.title}
                           
                          
                        </p>
                        <p class="p-1"> Rs: {ad.price}</p>
                        <p class="p-1"> Location:{ad.location}</p>
                        <p class="p-1"> Description:{ad. description}</p>
            
                        </div>
                        </a>
                        
                        </div>
                        </div>
                 );
    })}
    
    </div>

</>

  );
}

export default Dashboard;