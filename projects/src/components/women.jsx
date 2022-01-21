import React,{useState,useEffect} from 'react';
import { products } from './data';
import Mininav from './mininav';




export default function Women() {
  const item = products.filter((i,v)=> i.gender === "WOMEN")
   const [data,setData]=useState(item)
  
   
    // console.log(item)
     function category(id){
      
    
       const product=item.filter((i,v)=> i. category===id)
      setData(product)
   
     
     console.log("data",data)
    
     }
     function all(){
      setData(item)

     }
  
    return (<>
        <Mininav fun={category} all={all}/>
        <div class="row row-cols-1 row-cols-md-3 g-4" >
               {data.map((i,v)=>
            <div class="col">
            <div className="card h-100">
              <img src={i.imageURL} class="card-img-top" alt="..."  className="img" />
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <h5 className="card-title">{i.category}</h5>
                <p className="card-text">{i.price}.</p>
              </div>
            </div>
          </div>)}
      
           
            
        </div>
        </>
    )
}