"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Home() {
  const [client, setClient] = useState('');
  const [song, setSong] = useState('');
  const [supabase, setSupabase] = useState<any>(null);

  // ブラウザ側で安全にクライアントを作成する
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    setSupabase(createClient(url, key));
  }, []);

  const addCase = async () => {
    if (!supabase) return;
    const { error } = await supabase
      .from('cases')
      .insert([{ client_name: client, song_title: song }]);

    if (error) {
      alert('エラー: ' + error.message);
    } else {
      alert('登録完了！');
      setClient('');
      setSong('');
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-6">Casion</h1>
      <div className="p-4 border rounded-lg">
        <input 
          value={client} 
          onChange={(e) => setClient(e.target.value)}
          placeholder="クライアント名" 
          className="w-full p-2 mb-2 border rounded"
        />
        <input 
          value={song} 
          onChange={(e) => setSong(e.target.value)}
          placeholder="曲名" 
          className="w-full p-2 mb-4 border rounded"
        />
        <button 
          onClick={addCase} 
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          保存する
        </button>
      </div>
    </main>
  );
}