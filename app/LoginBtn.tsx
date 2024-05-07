'use client'

import { signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function LoginBtn(){
    return(
        <div className="flex flex-cols justify-end">
             <div className="text-l text-gray-500 flex hover:cursor-pointer p-2 pr-6 hover:text-black"
            onClick={()=>{signIn()}}
            >
                로그인
            </div>
            <Link href={'/join'} className="text-l text-gray-500 flex justify-end hover:cursor-pointer p-2 pr-6 hover:text-black">회원가입</Link>
            <div className="border-b border-gray-100 h-2"></div>
        </div>
       
    )
}