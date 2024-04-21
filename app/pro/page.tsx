'use client'

export default function Pro(){
    return(
        <div>
            <div className="text-2xl font-semibold p-4 pl-40">프로관전</div>
            <div className="border-t border-gray-200"></div>
            <div className="flex text-sm pt-4 font-bold text-gray-500 p-4 pl-40">
                <div className="cursor-pointe hover:bg-blue-400 hover:text-white hover:rounded-lg focus:bg-gray-500 focus:text-black p-2" onClick={() => {}}>
                    관전
                </div>
                <div className="cursor-pointe hover:bg-blue-400 hover:text-white hover:rounded-lg focus:bg-gray-500 focus:text-black p-2" onClick={() => {}}>
                    등록된 소환사
                </div>
                <div className="cursor-pointe hover:bg-blue-400 hover:text-white hover:rounded-lg focus:bg-gray-500 focus:text-black p-2" onClick={() => {}}>
                    도움말
                </div>
            </div>

        </div>
    )
}