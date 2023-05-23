import { useEffect, useState } from "react";

export default function useFetch() {
 const [data, setData] = useState("")
 
    useEffect(() => {
         async function getData() {   
          try {
            const response = await fetch("https://example-apis.vercel.app/api/weather")
            const data = await response.json()
           setData(data)    
          } 
          catch {
            console.error("error")
          }
        }
        const timeOut = setInterval(() => {
          getData()
        }, 5000)
   return () => clearInterval(timeOut);
     }, [] ) 
     
 return  data
} 
