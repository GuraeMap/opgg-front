'use client'

import { signIn, signOut } from "next-auth/react"

export default function LoginBtn(){
    return(
        <div>
             <div className="text-l text-gray-500 flex justify-end hover:cursor-pointer p-2 pr-6"
            onClick={()=>{signIn()}}
            >
                로그인
            </div>
            <div className="border-b border-gray-100 h-2"></div>
        </div>
       
    )
}