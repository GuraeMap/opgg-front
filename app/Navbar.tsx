import Link from "next/link";
import Sidebar from "./sidebar";

export default function Navbar(){
    return(
        <div>
            <span className="flex flex-col pl-10 p-4">
                <div className="flex flex-cols justify-end">
                    <Link href={'/'} className="text-4xl font-black text-red-600">⌁ 번개장터</Link>
                    <input 
                        className="bg-white ml-20 w-2/5 h-10 p-4 text-gray-600  border border-gray-300"
                        placeholder="상품명, 지역명, @상점명 입력" />
                    <Link href={'/sale'} className="ml-80 text-gray-600 hover:text-black">판매하기</Link>
                    <div className="ml-4 text-gray-600 hover:text-black">내상점</div>
                    <div className="ml-4 text-gray-600 hover:text-black">번개톡</div>
                </div>

                <div className="pt-6">
                    <div className="text-gray-400 pb-4"> </div>
                    <div className="pb-4 pl-16">🟰 번개장터 판매자센터</div>
                </div>
               
                {/* <span className=""> 마이페이지 </span> */}
            </span>
            <div className="border-b border-gray-100 h-8"></div>
            <Sidebar />
            
            
            
        </div>
    )
}