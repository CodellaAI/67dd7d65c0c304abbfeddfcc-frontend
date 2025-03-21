
"use client";

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      setStatus('Sending request...');
      
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log-click`, {
        timestamp: new Date(),
        action: 'button_clicked'
      });
      
      setStatus('Entry added successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      setStatus('Error: Failed to add entry');
      console.error('Error adding entry:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Simple Click test commit asd</h1>
        
        <button
          onClick={handleClick}
          disabled={loading}
          className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Processing...' : 'Log Click to MongoDB'}
        </button>
        
        {status && (
          <div className={`mt-4 p-3 rounded-md text-center ${
            status.includes('Error') 
              ? 'bg-red-100 text-red-700' 
              : status.includes('successfully') 
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-100 text-blue-700'
          }`}>
            {status}
          </div>
        )}
      </div>
    </main>
  );
}
