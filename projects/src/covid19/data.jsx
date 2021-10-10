import React,{useState,useEffect} from 'react';
import axios from 'axios'
import SimplePaper from './cards';
import Country from './country';
import Chart from './chart';
import HorizontalBarChart from './barchart';


export default function Data() {
   const [confirm,setConfirm]=useState("")
   const [update,setUpdate]=useState("")
   const [death,setDeath]=useState("")
   const[country,setCountry]=useState([])
    const [loading,setLoading]=useState(false)
    const [name,setName]=useState('')
    let url=!name?"https://covid19.mathdro.id/api":`https://covid19.mathdro.id/api/countries/${name}`
    // let url='https://covid19.mathdro.id/api'
    async function fetching(){

        const res= await axios.get(url)
        const data = await res.data
        console.log("data api",data)
     
        const {confirmed ,deaths , lastUpdate}=data
       
        setConfirm(confirmed.value)
        setDeath(deaths.value)
        setUpdate(new Date (lastUpdate).toDateString())
    
    }
    useEffect(() => {

        fetching()
        
    }, [name])
    async function fetchCountry(){

        const {data : {countries}}= await axios.get('https://covid19.mathdro.id/api/countries')
         setCountry(countries) 
       
    }
    useEffect(() => {

        fetchCountry()
        
    }, [])
    
    return (
        <div>
           
              <Country country={country} setName={setName}/>
              <SimplePaper data={confirm}  update={update} cases="Confirm Cases" />
              <SimplePaper data={death} update={update} cases="Death Cases" />
              
             
              <HorizontalBarChart  name={name} confirm={confirm} death={death} />
        </div>
    )
}