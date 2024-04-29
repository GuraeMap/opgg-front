export default function Navbar(){
    return(
        <div>
            <span className="flex flex-col pl-24 p-4 ">
                <div className="flex">
                    <div className="text-3xl font-black">⌁ 번개장터</div>
                    <input 
                        className="bg-white ml-20 w-2/5 h-10"
                        placeholder="상품명, 지역명, @상점명 입력" />
                    <div className="ml-80 text-gray-600">판매하기</div>
                    <div className="ml-4 text-gray-600">내상점</div>
                    <div className="ml-4 text-gray-600">번개톡</div>
                </div>

                <div className="pt-6">
                    <div className="text-gray-400 pb-4"> </div>
                    <span>🟰 번개장터 판매자센터</span>
                </div>
               
                {/* <span className=""> 마이페이지 </span> */}
            </span>
            <div className="border-b border-gray-100 h-8"></div>
            
            
            
        </div>
    )
}