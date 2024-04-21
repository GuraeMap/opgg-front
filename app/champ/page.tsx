export default function Champ(){
    return(
        <div className="p-4 pl-40">
            <div className="font-bold">챔피언 분석(all, 에메랄드 +, Patch 14.08)</div>
            <div className="text-xs pt-2 text-gray-500">
                실시간으로 업데이트되는 롤 14.08패치의 티어 정보입니다.<br />
                소환사의 협곡 챔피언 분석으로 빌드, 룬, 아이템, 스킬 정보를 통해 승률을 높여보세요!
            </div>
            <input 
                placeholder="🔍 챔피언 검색(가렌, ㄱㄹ, ...)"
                className="p-2 w-1/2"
            />
            <div className="text-xs pt-2 text-gray-500">최근 검색한 챔피언</div>
            

        </div>
    )
}