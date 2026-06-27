"use client";

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabaseクライアントの初期化
// ※環境変数はVercelのダッシュボードで設定されている前提です
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// クライアントの生成（型をanyで指定してエラーを抑制）
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    try {
      setError('');
      // データベースからデータを取得するテスト
      // ※ 'cases' テーブルが存在しない場合はエラーになります
      const { data: fetchedData, error: fetchError } = await supabase
        .from('cases')
        .select('*')
        .limit(5);

      if (fetchError) throw fetchError;
      
      setData(fetchedData || []);
    } catch (err: any) {
      console.error('Supabase Error:', err);
      setError(err.message || 'データの取得に失敗しました');
    }
  };

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <h1>Casion Debug</h1>
        <p>Supabase 接続テスト</p>
      </header>

      <button 
        onClick={fetchData}
        style={{ padding: '10px 15px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        データを取得する
      </button>

      {error && (
        <div style={{ marginTop: '20px', color: 'red', background: '#ffcccc', padding: '10px' }}>
          <strong>エラー:</strong> {error}
        </div>
      )}

      {data.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>取得データ (casesテーブル):</h2>
          <pre style={{ background: '#f0f0f0', padding: '10px', overflow: 'auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}