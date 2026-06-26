const addCase = async () => {
    // 接続先を表示させるテスト
    console.log("接続先URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    
    const { data, error } = await supabase.from('cases').select('*');
    if (error) {
      alert('エラー内容: ' + error.message + '\n接続先: ' + process.env.NEXT_PUBLIC_SUPABASE_URL);
    } else {
      alert('登録完了！');
    }
  };