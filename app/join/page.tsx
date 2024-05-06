export default function Join(){
    return(
        <div className="">
            <div className="text-center text-3xl pt-20 font-bold">회원가입</div>
            <div>
                <div className="flex flex-col pl-96">
                    <div className="pt-8 font-bold">아이디</div>
                    <input 
                        placeholder="아이디를 입력하세요 "
                        className="bg-white p-3 w-2/4 text-gray-500 font-bold border border-gray-300"
                    />
                    <div className="pt-2 font-bold">비밀번호</div>
                    <input 
                        placeholder="비밀번호를 입력하세요"
                        className="bg-white p-3 justify-end w-2/4 text-gray-500 font-bold border border-gray-300"
                    />
                    <div className="pt-2 font-bold">비밀번호 재확인</div>
                    <input 
                        placeholder="비밀번호를 재입력하세요 "
                        className="bg-white p-3 w-2/4 text-gray-500 font-bold border border-gray-300"
                    />
                    <div className="pt-10 font-bold">이름</div>
                    <input 
                        placeholder="이름을 입력하세요 "
                        className="bg-white p-3 w-2/4 text-gray-500 font-bold border border-gray-300"
                    />
                    <div className="pt-2 font-bold">생년월일</div>
                    <input 
                        placeholder="선택입력 "
                        className="bg-white p-3 w-2/4 text-gray-500 font-bold border border-gray-300"
                    />
                    <div className="pt-2 font-bold">성별</div>
                    <input 
                        placeholder="성별"
                        className="bg-white p-3 w-2/4 text-gray-500 font-bold border border-gray-300"
                    />
                    <div className="pt-2 font-bold">본인 확인 이메일<a className="font-thin text-sm">(선택)</a></div>
                    <input 
                        placeholder="선택입력 "
                        className="bg-white p-3 w-2/4 text-gray-500 font-bold border border-gray-300"
                    />
                    <div className="pt-2 font-bold">휴대전화</div>
                    <input 
                        placeholder="인증번호 입력하세요 "
                        className="bg-white p-3 w-2/4 text-gray-500 font-bold border border-gray-300"
                    />
                </div>
            </div>
            
            <button className="text-center mt-10 ml-96 p-3 border w-96">가입하기</button>
        </div>
    )
}