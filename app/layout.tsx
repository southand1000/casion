import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      
        
        {/* メインコンテンツ（スクロール領域） */}
        {/* 下部タブの高さ（約70px）分だけ下の余白を空けて、コンテンツが隠れないようにします */}
        
          {children}
        

        {/* 下部固定タブ（ナビゲーション） */}
        
          
          
            🏠
            ダッシュボード
          

          
            📋
            案件
          

          
            👤
            顧客
          

          
            ⚙️
            設定
          

        
      
    
  )
}