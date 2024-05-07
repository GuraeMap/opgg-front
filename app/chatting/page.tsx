'use client'
import React, { useState } from 'react';

const Chatting: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState<string>('');

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages([...messages, inputMessage]);
            setInputMessage('');
        }
    };

    return (
        <div className='pb-10'>

        
            <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg">
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">장터톡</h2>
                    <div className="border border-gray-200 p-2 rounded-lg h-40 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className="mb-2">{message}</div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="메시지를 입력하세요..."
                        className="flex-1 border border-gray-300 p-2 rounded-l-lg"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-r-lg"
                        onClick={handleSendMessage}
                    >
                        전송
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatting;
