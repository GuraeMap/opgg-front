export default function Myshop(){
    return(
        <div>
            <div className="p-10 pl-24 flex border">
                <div className="w-72 h-80 bg-gray-400 text-center pt-40 text-xl text-white">상점 70928745호</div>
                <div>
                    <div className="pl-10 text-xl pt-2">상점 70928745호</div>
                    <div className="border-b border-gray-100 pt-4"></div>
                    <div className="flex pl-10 pt-4 text-gray-700 text-sm">
                        <div>상점오픈일<a className="font-bold"> 810 일 전</a></div>
                        <div className="pl-4">상점방문수<a className="font-bold">  0명</a></div>
                        <div className="pl-4">상점판매 <a className="font-bold">  0회</a></div>
                        <div className="pl-4">택배발송 <a className="font-bold">  0회</a></div>
                    </div>
                    <div className="border-b border-gray-100 pb-4"></div>
                </div>
            </div>
            
        </div>
    )
}