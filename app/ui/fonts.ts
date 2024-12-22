import {Inter,Lusitana} from 'next/font/google'

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})// 导入 Inter 字体，并设置字体子集为 latin
export const inter = Inter({
  subsets: ['latin'],
})// 导入 Inter 字体，并设置字体子集为 latin