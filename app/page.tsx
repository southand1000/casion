"use client";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const checkConnection = async () => {
    // データの取得を試みる
    const { data, error } = await supabase.from('cases').select('*').range(0, 0);
    if (error) {
      alert('接続エラー: ' + error.message);
    } else {
      alert('接続成功！データにアクセスできました');
    }
  };

  return (
    <main className="p-10">
      <button onClick={checkConnection} className="bg-blue-500 text-white p-4 rounded">
        接続テストを実行
      </button>
    </main>
  );
}