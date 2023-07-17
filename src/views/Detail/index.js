import React from "react"
import { useParams } from 'react-router-dom';
import { query,where, collection, getDocs ,} from "firebase/firestore";
import {db}  from "../../config/firebase";
import { useEffect, useState } from 'react';
export default   function Detail  (props) {

    const param = useParams()
    const { docId ,title,price,description,location,image} = param

         
           
             
    
    
    const [productarray, setPorductArray] = useState([

    

])


    

    const specificAd = async () => {
        try {
            const q = query(collection(db, "ads"), where("docId", "==", docId));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                //setPorductArray(doc.data())
                //console.log("1", doc.data())
                let arr = [];
                arr.push(doc.data());
                setPorductArray(arr)

              
                console.log("arr", arr)

            })
        }
        catch (error) {

            return error
        }
    }


    useEffect(() => {
        specificAd();
      
    }, [docId])





return(
    <>
    <h1>
    Ads Detail Show
    </h1>
   
    {productarray.map((data) => {
        return (
            <div>
               <p class="p-1"> Title: {data.title}
                       
                      
                       </p>
                </div>
        )
    })
}


   

                 
    <div className="main6">
          
                    
                  
                <div class="box-2">
                     <div class="box-1img">
                 
                        <img src={image}/>
                
                        
        
                    
                    
            
        
                    </div>
                <div class="box-1p">
                    
                    <p class="p-1"> Title: {title}
         
                      
                    </p>
                    <p class="p-1"> Rs: {price}</p>
                
                    <p class="p-1"> Location:{location}</p>
                    <p class="p-1"> Description:{ description}</p>
        
                  
                    
                    
                
            </div>
                
           
            </div>
                    
                    <div>

                    <button className="bu">
                        Add to cart
                    </button>
                   
                    </div>
            
    </div>

    </>
)
}