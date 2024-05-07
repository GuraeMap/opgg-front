export default function Sale(){
    return(
        <div>
            <div className=""></div>
            <div className="text-ml border-b border-gray-100">
                <div className="m-10 ml-24">
                    <span className="text-red-400">상품등록 </span>
                    <span className="text-gray-500 ml-10">  상품관리  </span>
                    <span className="text-gray-500 ml-10"> 구매/판매 내역</span>
                </div>
                
            </div>
            <div className="ml-24 text-2xl m-4 mt-8">상품정보</div>
            <div className=" ml-24 border-b border-black"></div>
            <div className="ml-24">
                <div className="mt-10 mb-20">
                    <div>상품이미지</div>
                </div>
                <div className="border-b border-gray-100"></div>
                <div className="mt-10 mb-20 flex flex-col">
                    <div>
                        상품명
                        <input placeholder="상품명을 입력해주세요."
                        className="ml-44 border-2 rounded-l" />
                    </div>
                    
                    <div className="pt-10">
                        상품정보
                        <input placeholder="상품정보를 입력해주세요."
                        className=" ml-40 border-2  p-2 rounded-l" 
                        style={{ width: '400px', height: '200px' }} />
                    </div>
                    
                </div>
                <div className="border-b border-gray-100"></div>
                <div className="pt-10 pb-10">
                    가격
                </div>
                <div className="border-b border-gray-100"></div>
                <div className="mt-10 mb-20">
                    <div>카테고리</div>
                </div>


            </div>
            <div className="text-center pb-10">
               
                <span className="mr-8 text-xl p-4 rounded-xl bg-red-400 text-white hover:bg-red-600">임시저장</span>
                <span className="text-xl p-4 rounded-xl bg-red-400 text-white hover:bg-red-600">등록하기</span>
                
            </div>
        </div>
    )
}