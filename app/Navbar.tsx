'use client'
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import Sidebar from "./sidebar";

export default function Navbar(){
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        // 검색 기능을 추가할 수 있습니다. 예를 들어, 검색 결과 페이지로 이동하거나 검색 결과를 가져오는 등의 작업을 수행할 수 있습니다.
        console.log("검색어:", searchInput);
    };

    return(
        <div>
            <span className="flex flex-col pl-10 p-4">
                <div className="flex flex-cols justify-end">
                    <Link href={'/'} className="text-4xl font-black text-red-600 pr-40">⌁ 중고장터</Link>
                    <div className="flex items-center ml-54">
                        <input 
                            className="bg-white w-96 h-10 p-2 text-gray-600 border border-gray-300 rounded-l-lg"
                            placeholder="상품명, 지역명, @상점명 입력"
                            value={searchInput}
                            onChange={handleInputChange}
                        />
                        <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg"
                        onClick={handleSearch}
                    >
                        확인
                    </button>
                        
                    </div>
                    
                    <Link href={'/sale'} className="ml-80 text-gray-600 hover:text-black">판매하기</Link>
                    <Link href={'/myshop'} className="ml-4 text-gray-600 hover:text-black">내상점</Link>
                    <Link href ={'/chatting'} className="ml-4 text-gray-600 hover:text-black">장터톡</Link>
                </div>

                <div className="pt-6">
                    <div className="text-gray-400 pb-4"> </div>
                    <div className="pb-4 pl-16">🟰 중고장터 판매자센터</div>
                </div>
               
                {/* <span className=""> 마이페이지 </span> */}
            </span>
            <div className="border-b border-gray-100 h-8"></div>
            <Sidebar />
        </div>
    )
}
