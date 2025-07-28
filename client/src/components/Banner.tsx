import React from 'react';
import { assets } from '../assets/assets';

// Định nghĩa component Banner
const Banner = () => {
  return (
    // Container chính với layout responsive và style gradient
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
      {/* Phần nội dung văn bản bên trái */}
      <div className="text-white">
        {/* Tiêu đề */}
        <h2 className="text-3xl font-medium">Bạn có sở hữu một chiếc xe sang?</h2>
        {/* Đoạn văn bản mô tả */}
        <p className="mt-2">Kiếm tiền từ chiếc xe của bạn một cách dễ dàng bằng cách niêm yết nó trên CarRental.</p>
        {/* Đoạn văn bản chi tiết hơn */}
        <p className="max-w-130">Chúng tôi lo liệu bảo hiểm, xác minh tài xế và thanh toán an toàn — để bạn có thể kiếm thu nhập thụ động mà không phải lo lắng.</p>
        {/* Nút "List your car" */}
        <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer" tabIndex={0}>Niêm yết xe của bạn</button>
      </div>
      {/* Hình ảnh xe hơi bên phải */}
      <img alt="car" className="max-h-45 mt-10" src={assets.banner_car_image} style={{ opacity: 1, transform: 'none' }} />
    </div>
  )
}

// Export component Banner làm mặc định
export default Banner
