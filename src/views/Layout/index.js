import { Link, Outlet,useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import capture from "../../asset/images/Capture.JPG"
import logo from "../../asset/images/5.png"
import { useEffect, useState } from "react";
import { getAllAds } from "../../config/firebase";
import AddToCartButton from "../../AddToCartButton";


export default function Layout({ product }) {
  const navigate = useNavigate();

  
  const [data, setData] = useState([]);


  const [filteredAds, setFilteredAds] = useState([]);
  const [query, setQuery] = useState("");

  
  const getData = async () => {
   
    const res = await getAllAds();
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
    
    
    <nav>


      
    
        
     
        <ul>

        <img id ="logo" src={logo}/>
        
        <select name="countries" >
                <option hidden>Select Your Country</option>
                <option name="countries" value="Pakistan">Pakistan</option>
                <option name="countries" value="Afghanistan">Afghanistan</option>
                <option name="countries" value="Uzbekistan">Uzbekistan</option>
                <option name="countries" value="Hindustan">Lahore</option>
                <option name="countries" value="Pakistan">Islamabad</option>
                <option name="countries" value="Afghanistan">Faislabad</option>
                <option name="countries" value="Uzbekistan">Uzbekistan</option>
                <option name="countries" value="Hindustan">Hindustan</option>
            </select>

            <input className="serchinput" type="text"  placeholder=" Search Ads Cars, mobile phone and More...."/>
            <div className="search-line">

        
         <FiSearch/>
            </div>

            
          <li id="home">
            <Link id="link" to="/">Home</Link>

          </li>
         

          
          <li>
            <Link id="link" to="/login">Login</Link>
          </li>
          <li>
            <Link id="link" to="/signup">Signup</Link>

          </li>
          <li>
            <Link id="link" to="/CartPage">




            <img id ="logo2" src="https://png.pngtree.com/png-vector/20190320/ourmid/pngtree-vector-shopping-cart-icon-png-image_850694.jpg"/>

            </Link>

          </li>
        
          
          
        </ul>
    </nav>
    <Outlet />

      <img  id="ad" src={capture}/>


     

 
     
      
      <input id="in" type="text" placeholder=" Search Ads Mobail , Cars, other" value={query} onChange={handleSearch} />

      <h1>Freash Recommended</h1>
      <h2>All Ads</h2>
        <div className= "disply-card">
          




          
         
      {filteredAds.map((ad) => {
        return (

          
          
  
               
    <div className="main">
          

                  
                <div class="box-1">
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
                
            <button
                    className="bu"
            
            onClick={() => navigate(`detail/${ad.docId}/${ad.title}/${ad.price}/${ad.location}/${ad.description}/`)}
          >
            Show Details
            </button>
            <AddToCartButton item={product} />
            </div>
                    </div>
            

            
        

          
           
          
         

           
);
})}

</div>

         
           
       
        


  

     

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
     

 </>
  );
}
