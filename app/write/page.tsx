'use client'

import axios from 'axios';

export default function Write (){
    axios.get('http://43.201.254.2:8000/v1/board/?current_page=1').then((Response) => {
    console.log(Response.data);
    }).catch((Error) =>{
    console.log(Error);
    })
   
    return(
        <div>dd</div>
    )
}

