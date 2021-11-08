import React,{useState} from 'react';
import { products } from './data';
import Mininav from './mininav';
import { useParams } from 'react-router';



export default function Men() {
  const item = products.filter((i,v)=> i.gender === "MEN")
   const [data,setData]=useState(item)
   const [flag,setFlag]=useState(false)
   
    // console.log(item)
     function category(id){
      
       setFlag(true)
       const product=data.filter((i,v)=> i. category===id)
       flag ? setData(product):setData(item)
      
      

      
       

     }
     
     console.log("data",data)
     console.log(flag)
    return (<>
        <Mininav fun={category} />
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
