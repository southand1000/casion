import React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f8fafc', color: '#333', fontFamily: 'sans-serif' }}>
        
        <main style={{ paddingBottom: '80px', minHeight: '100vh', boxSizing: 'border-box' }}>
          {children}
        </main>

        <nav style={{
          position: 'fixed', bottom: 0, width: '100%', height: '70px',
          backgroundColor: 'white', borderTop: '1px solid #e2e8f0',
          display: 'flex', justifyContent: 'space-around', alignItems: 'center',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.03)', zIndex: 1000,
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}>
          
          <Link href="/" style={{ textDecoration: 'none', color: '#64748b', textAlign: 'center', fontSize: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '24px' }}>🏠</span>
            ダッシュボード
          </Link>

          <Link href="/projects" style={{ textDecoration: 'none', color: '#64748b', textAlign: 'center', fontSize: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '24px' }}>📋</span>
            案件
          </Link>

          <Link href="/clients" style={{ textDecoration: 'none', color: '#64748b', textAlign: 'center', fontSize: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '24px' }}>👤</span>
            顧客
          </Link>

          <Link href="/settings" style={{ textDecoration: 'none', color: '#64748b', textAlign: 'center', fontSize: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '24px' }}>⚙️</span>
            設定
          </Link>

        </nav>
      </body>
    </html>
  );
}