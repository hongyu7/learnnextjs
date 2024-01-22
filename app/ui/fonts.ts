import { Inter, Lusitana } from 'next/font/google';

// 预先下载字体文件并将其与其它静态资源一起托管。

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
