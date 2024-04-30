'use client'

import React, { useState } from 'react';

const Sidebar = () => {
  // 네비게이션 메뉴 아이템
  const navigationItems = [
    { name: '찜한상품', href: '/heart' },
    { name: '🖤', href: '/services' },
    // 필요에 따라 메뉴 항목 추가
  ];

  const handleClick = () => {
    // 페이지의 상단으로 스크롤
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드럽게 스크롤
    });
  };

  return (
    <nav className="fixed top-0 right-10 mt-80 text-center">
      <div className='bg-white p-4 ml-20 border border-gray-300'>
        <ul className="list-none">
          {navigationItems.map((item, index) => (
            <li key={index} className="my-2">
              <a href={item.href} className="text-gray-700 hover:text-gray-900">{item.name}</a>
              
            </li>
            
          ))}
        </ul>
        
      </div>
      <div className='bg-white p-4 ml-20 mt-2 text-gray-500 font-bold border border-gray-300'>
        <button onClick={handleClick}>TOP</button>
      </div>
    </nav>
  );
}

export default Sidebar;
