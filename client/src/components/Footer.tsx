// Import React từ thư viện 'react'
import React from 'react';
import { assets } from '../assets/assets';

// Định nghĩa component Footer
const Footer = () => {
  return (
    // Container chính của Footer với các thuộc tính CSS để định dạng và hiệu ứng
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500" style={{ opacity: 1, transform: 'none' }}>
      {/* Phần trên của Footer chứa logo, mô tả và các biểu tượng mạng xã hội */}
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b" style={{ opacity: 1, transform: 'none' }}>
        {/* Phần logo và mô tả */}
        <div>
          {/* Logo của ứng dụng */}
          <img alt="logo" className="h-8 md:h-9" src={assets.logo} style={{ opacity: 1 }} />
          {/* Đoạn mô tả về dịch vụ thuê xe */}
          <p className="max-w-80 mt-3" style={{ opacity: 1 }}>Dịch vụ cho thuê xe cao cấp với nhiều lựa chọn xe sang trọng và thông dụng, đáp ứng mọi nhu cầu di chuyển của bạn.</p>
          {/* Các biểu tượng mạng xã hội */}
          <div className="flex items-center gap-3 mt-6" style={{ opacity: 1 }}>
            {/* Liên kết đến Facebook */}
            <a href="#"> <img className="w-5 h-5" alt="" src={assets.facebook_logo} /> </a>
            {/* Liên kết đến Instagram */}
            <a href="#"> <img className="w-5 h-5" alt="" src={assets.instagram_logo} /> </a>
            {/* Liên kết đến Twitter */}
            <a href="#"> <img className="w-5 h-5" alt="" src={assets.twitter_logo} /> </a>
            {/* Liên kết đến Email */}
            <a href="#"> <img className="w-5 h-5" alt="" src={assets.gmail_logo} /> </a>
          </div>
        </div>
        {/* Các cột liên kết nhanh, tài nguyên và thông tin liên hệ */}
        <div className="flex flex-wrap justify-between w-1/2 gap-8" style={{ opacity: 1, transform: 'none' }}>
          {/* Cột liên kết nhanh */}
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">Liên kết nhanh</h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li><a href="#">Trang chủ</a></li>
              <li><a href="#">Duyệt xe</a></li>
              <li><a href="#">Đăng xe của bạn</a></li>
              <li><a href="#">Về chúng tôi</a></li>
            </ul>
          </div>
          {/* Cột tài nguyên */}
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">Tài nguyên</h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li><a href="#">Trung tâm trợ giúp</a></li>
              <li><a href="#">Điều khoản dịch vụ</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Bảo hiểm</a></li>
            </ul>
          </div>
          {/* Cột thông tin liên hệ */}
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">Liên hệ</h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>+1 234 567890</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Phần dưới của Footer chứa bản quyền và các liên kết pháp lý */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5" style={{ opacity: 1, transform: 'none' }}>
        {/* Thông tin bản quyền */}
        <p>© 2025 Brand. Đã đăng ký bản quyền.</p>
        {/* Các liên kết pháp lý */}
        <ul className="flex items-center gap-4">
          <li><a href="#">Quyền riêng tư</a></li>
          <li>|</li>
          <li><a href="#">Điều khoản</a></li>
          <li>|</li>
          <li><a href="#">Cookie</a></li>
        </ul>
      </div>
    </div>
  );
};

// Export component Footer để có thể sử dụng ở nơi khác
export default Footer;
