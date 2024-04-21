'use client'

import { signIn, signOut } from "next-auth/react"

export default function LoginBtn(){
    return(
        <div>
             <div className="bg-blue-500 text-xl text-white flex justify-end hover:cursor-pointer p-2 pr-6"
            onClick={()=>{signIn()}}
            >
                로그인
            </div>

        </div>
       
    )
}