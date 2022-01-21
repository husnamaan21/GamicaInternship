import React from 'react';
import { Link,useRouteMatch,Switch,Route ,useParams} from 'react-router-dom'


export default function Mininav({fun,all}) {
    let { path, url } = useRouteMatch();
  
    return (
        <div>
             <nav>
                <div class="nav-wrapper  teal lighten-2">
                    <Link class="brand-logo" to="/">Shoes Store</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to={`${url}` } onClick={()=>{all(url) }}>All</Link></li>

                        <li><Link to={`${url}/Formal`} onClick={()=>{fun("FOOTBALL") }}>Football</Link></li>
                        <li><Link to={`${url}/Formal`} onClick={()=>{fun("FORMAL") }}>Formal</Link></li>
                     
                        <li><Link to={`${url}/Casual`} onClick={()=>{fun("CASUAL")}}>Casual</Link></li>
                        <li><Link to={`${url}/Running`} onClick={()=>{fun("RUNNING")}} >Running</Link></li>
                      
                      
                    </ul>
                </div>
            </nav>
            <Switch>
<Route exact path={path} />


<Route path={`${path}/:id`} />
 

</Switch>
        </div>
    )
}




