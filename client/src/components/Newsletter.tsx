// Import thư viện React
import React from 'react'

// Định nghĩa component Newsletter (Bản tin)
const Newsletter = () => {

  return (
    // Container chính cho phần bản tin, căn giữa và có khoảng cách
    <div className="flex flex-col items-center justify-center text-center space-y-2 max-md:px-4 my-10 mb-40" style={{ opacity: 1, transform: 'none' }}>
      {/* Tiêu đề chính của bản tin */}
      <h1 className="md:text-4xl text-2xl font-semibold" style={{ opacity: 1, transform: 'none' }}>Đừng bỏ lỡ ưu đãi nào!</h1>
      {/* Đoạn văn mô tả */}
      <p className="md:text-lg text-gray-500/70 pb-8" style={{ opacity: 1, transform: 'none' }}>
        Đăng ký để nhận các ưu đãi mới nhất, hàng mới về và giảm giá độc quyền
      </p>
      {/* Form đăng ký email */}
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12" style={{ opacity: 1, transform: 'none' }}>
        {/* Input để nhập địa chỉ email */}
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          placeholder="Nhập địa chỉ email của bạn"
          required // Yêu cầu nhập
          type="text" // Loại input là văn bản
        />
        {/* Nút đăng ký */}
        <button
          type="submit" // Loại nút gửi form
          className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Đăng ký
        </button>
      </form>
    </div>
  )
}

// Xuất component Newsletter để sử dụng ở nơi khác
export default Newsletter
