import '@/app/ui/global.css'; //加入全局样式设置。
import { inter } from '@/app/ui/fonts'; //引入字体

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
