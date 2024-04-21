'use client'

export default function Rank(){
    return(
        <div>
            <div className="text-2xl font-semibold p-4 pl-40">랭킹</div>
            <div className="border-t border-gray-200"></div>
            <div className="flex text-sm pt-4 font-bold text-gray-500 p-4 pl-40">
                <div className="cursor-pointe hover:bg-blue-400 hover:text-white hover:rounded-lg focus:bg-gray-500 focus:text-black p-2" onClick={() => {}}>
                    솔로랭크
                </div>
                <div className="cursor-pointe hover:bg-blue-400 hover:text-white hover:rounded-lg focus:bg-gray-500 focus:text-black p-2" onClick={() => {}}>
                    자유랭크
                </div>
                <div className="cursor-pointe hover:bg-blue-400 hover:text-white hover:rounded-lg focus:bg-gray-500 focus:text-black p-2" onClick={() => {}}>
                    챔피언
                </div>
                <div className="cursor-pointe hover:bg-blue-400 hover:text-white hover:rounded-lg focus:bg-gray-500 focus:text-black p-2" onClick={() => {}}>
                    레벨
                </div>
            </div>

        </div>
    )
}