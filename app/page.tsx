import List from "./list";

export default function Home() {
  return (
      <div>
        <div className="text-4xl pt-10 font-bold">
            
        </div>
        <div className="flex justify-center pt-20">
          <img src="/page0.png" />
          
        </div>
        <div className="pl-24 p-4 pt-10 text-2xl text-gray-600">오늘의 상품 추천</div>
        <List />
    </div>
  );
}
