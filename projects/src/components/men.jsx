import React,{useState,useEffect} from 'react';
import { products } from './data';
import Mininav from './mininav';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';




export default function Men() {
  const item = products.filter((i,v)=> i.gender === "MEN")
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
        <div style={{display:"flex",flexWrap:"wrap"}}>
               {/* {data.map((i,v)=>
            <div class="col">
            <div className="card h-100">
              <img src={i.imageURL} class="card-img-top" alt="..."  className="img" />
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <h5 className="card-title">{i.category}</h5>
                <p className="card-text">{i.price}.</p>
              </div>
            </div>
          </div>)} */}
          {data.map((i,v)=>
          
            <Card sx={{ maxWidth: 345 }}>
            <CardHeader
          
              title={i.brand}
              subheader={i.name}
            />
            <CardMedia
              component="img"
              height="194"
              image={i.imageURL}
              alt="hello"
            />
            <CardContent>
              <Typography variant="h6" color="text.secondary">
               {i.category}
              </Typography>
              <Typography variant="p" color="text.secondary">
               price $ {i.price}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              
            </CardActions>
          
          </Card>
          
          )}
          {/* {data.map((i,v)=>
           <Card sx={{ maxWidth: 345 }}>
           <CardHeader
         
             title="Shrimp and Chorizo Paella"
             subheader="September 14, 2016"
           />
           <CardMedia
             component="img"
             height="194"
             image={i.imageURL}
           />
           <CardContent>
             <Typography variant="body2" color="text.secondary">
               This impressive paella is a perfect party dish and a fun meal to cook
               together with your guests. Add 1 cup of frozen peas along with the mussels,
               if you like.
             </Typography>
           </CardContent>
           <CardActions disableSpacing>
             <IconButton aria-label="add to favorites">
               <FavoriteIcon />
             </IconButton>
             <IconButton aria-label="share">
               <ShareIcon />
             </IconButton>
             
           </CardActions>
         
         </Card>
          )} */}
     
           
            
        </div>
        </>
    )
}







