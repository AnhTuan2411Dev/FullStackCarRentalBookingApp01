// Import React để sử dụng các thành phần React
import React from 'react'

// Định nghĩa giao diện cho props của thành phần Title
interface TitleProps {
    title: string; // Tiêu đề chính
    subTitle: string; // Tiêu đề phụ
    align?: 'left' | 'center'; // Căn chỉnh văn bản, tùy chọn là 'left' hoặc 'center'
}

// Thành phần Title hiển thị tiêu đề và tiêu đề phụ
const Title = ({ title, subTitle, align }: TitleProps) => {
    return (
        // Container chính với các lớp flexbox để căn chỉnh nội dung
        <div className={`flex flex-col justify-center items-center text-center
    ${align == "left" && " md:items-start md:text-left"}`}>
            {/* Tiêu đề chính */}
            <h1 className='font-semibold text-4xl md:text-[40px]'>
                {title}
            </h1>
            {/* Tiêu đề phụ */}
            <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>
                {subTitle}
            </p>
        </div>
    )
}

// Xuất thành phần Title để sử dụng ở nơi khác
export default Title
