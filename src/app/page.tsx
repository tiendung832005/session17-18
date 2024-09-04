import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'học lập trình nextjs',
  description: 'học nextjs cơ bản, đơn giản, basic',
}

export default function page() {
  return (
    <div>
      <img width={200} height={200} src="https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg" alt="" />
    <Image src={"https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg"} 
    height={200} 
    width={200} 
    alt='capybara'
    loading='lazy'>
    </Image>
    <Image
    src={"https://file1.dangcongsan.vn/data/0/images/2023/05/04/upload_2676/1465761-tkydalay-anh-2-ba-say.jpg?dpi=150&quality=100&w=780"}
    alt='ảnh gấu bông'
    width={200}
    height={200}
    loading='lazy'>

    </Image>

    </div>
  )
}
