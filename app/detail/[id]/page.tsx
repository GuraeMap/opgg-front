import Link from "next/link";

export default function Detail(){
    return(
        <div>
            <div  className="p-28 pt-12 border-t">
            
                <img src={'/img0.png'} className="w-1/3 h-auto absolute p-2" />
                <div className="flex flex-col ml-80 p-48 pt-10">
                    <span className="text-gray-400 font-semibold">샛별배송</span>
                    <span className="text-2xl pt-2">[서촌 영화루]짜장면 2인분</span>
                    <span className="text-gray-400 pt-2">집에서도 간편히 중식</span>
                    <span className="text-3xl font-bold pt-4">8,910원</span>
                    <span className="text-2xl pt-4">원산지: 상품설명/상세정보 참조</span>
                    <span className="text-red-700 font-semibold pt-2">로그인 후, 구입이 가능합니다.</span>
                    <div className="pt-2 bg-red-200 p-2">
                        <span className="text-red-800">2,000원</span> 
                        적립금 + 할인 쿠폰 받고 구매하기
                    </div>
                    <div>
                        <div className="flex flex-col text-gray-500 font-semibold pt-6">
                            <span className="pt-6 p-4 border-b border-t">배송</span>
                            <span className="pt-6 p-4 border-b">판매자</span>
                            <span className="pt-6 p-4 border-b">포장타임</span>
                            <span className="pt-6 p-4 border-b">판매단위</span>
                            <span className="pt-6 p-4 border-b">중량/용량</span>
                            <span className="pt-6 p-4 border-b">알레르기정보</span>
                            <span className="pt-6 p-4 border-b">유통기한</span>
                            <span className="pt-6 p-4 border-b">상품선택</span>
                        </div>
                        
                    </div>
                    <div className="pt-20 flex justify-end">
                        <span className="p-3">총 상품금액: </span>
                        <span className="ml-2 text-3xl font-bold">8,910원</span>
                    </div>
                    
                    <div className="flex pt-4 text-xl p-2">
                        <div className="ml-4 bg-red-600 text-white rounded-lg w-4/5 text-center p-6 hover:bg-red-500">장터톡</div>
                        <div className="ml-4 bg-red-600 text-white rounded-lg w-4/5 text-center p-6 hover:bg-red-500">구매하기</div>
                        <div className="ml-4 bg-red-600 text-white rounded-lg w-4/5 text-center p-6 hover:bg-red-500">🖤</div>
                        
                    </div>
                    </div>
                
            </div>
        </div>
    )
}