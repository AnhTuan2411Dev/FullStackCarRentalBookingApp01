// Import React và hook useState để quản lý trạng thái
import React, { useState } from 'react';
// Import các tài nguyên (hình ảnh, danh sách thành phố) từ tệp assets
import { assets, cityList } from '../assets/assets';

// Định nghĩa component Hero
const Hero: React.FC = () => {
  // Khai báo trạng thái cho địa điểm nhận xe
  const [pickupLocation, setPickupLocation] = useState('');
  // Khai báo trạng thái cho ngày nhận xe
  const [pickupDate, setPickupDate] = useState('');
  // Khai báo trạng thái cho ngày trả xe
  const [returnDate, setReturnDate] = useState('');

  // Lấy ngày hiện tại để đặt làm ngày tối thiểu cho các trường ngày
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng (thêm '0' nếu < 10)
  const day = String(today.getDate()).padStart(2, '0');     // Ngày (thêm '0' nếu < 10)
  const minDate = `${year}-${month}-${day}`; // Định dạng YYYY-MM-DD

  // Hàm tính toán ngày trả xe tối thiểu, phải sau ngày nhận xe ít nhất 1 ngày
  const calculateMinReturnDate = () => {
    if (pickupDate) {
      // Tạo đối tượng Date từ ngày nhận xe đã chọn
      const date = new Date(pickupDate);
      // Tăng ngày lên 1 để đảm bảo ngày trả xe sau ngày nhận xe
      date.setDate(date.getDate() + 1);
      // Trả về ngày dưới dạng YYYY-MM-DD
      return date.toISOString().split('T')[0];
    }
    // Nếu chưa chọn ngày nhận xe, ngày tối thiểu là ngày hiện tại
    return minDate;
  };

  // Tính toán ngày trả xe tối thiểu dựa trên hàm trên
  const minReturnDate = calculateMinReturnDate();

  return (
    // Container chính của component Hero
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center"
      style={{ opacity: 1 }}>
      {/* Tiêu đề chính của trang */}
      <h1 className="text-4xl md:text-5xl font-semibold" style={{ opacity: 1, transform: 'none' }}>
        Luxury cars on Rent
      </h1>
      {/* Form tìm kiếm xe */}
      <form className="flex flex-col md:flex-row items-start
      md:items-center justify-between p-6 rounded-lg md:rounded-full w-full
      max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
        style={{ opacity: 1, transform: 'none' }}>
        {/* Nhóm các trường nhập liệu */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
          {/* Trường chọn địa điểm nhận xe */}
          <div className="flex flex-col items-start gap-2">
            <select required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
              <option value="">Pickup Location</option>
              {/* Render danh sách các thành phố từ cityList */}
              {cityList.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {/* Hiển thị địa điểm đã chọn hoặc thông báo */}
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : 'Please select location'}
            </p>
          </div>
          {/* Trường nhập ngày nhận xe */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input id="pickup-date" min={minDate} // Ngày tối thiểu là ngày hiện tại
            className="text-sm text-gray-500" required type="date"
            value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} /> {/* Liên kết với trạng thái và hàm xử lý thay đổi */}
          </div>
          {/* Trường nhập ngày trả xe */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input id="return-date" min={minReturnDate} // Ngày tối thiểu được tính toán động
            className="text-sm text-gray-500" required type="date"
            value={returnDate} onChange={(e) => setReturnDate(e.target.value)} /> {/* Liên kết với trạng thái và hàm xử lý thay đổi */}
          </div>
        </div>
        {/* Nút tìm kiếm */}
        <button className="flex items-center justify-center
        gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull
        text-white rounded-full cursor-pointer" tabIndex={0}>
          <img alt="search" className="brightness-300" src={assets.search_icon} />
          Search
        </button>
      </form>
      {/* Hình ảnh xe chính */}
      <img alt="car" className="max-h-74" src={assets.main_car} style={{ opacity: 1, transform: 'none' }} />
    </div>
  );
};

// Export component Hero để sử dụng ở nơi khác
export default Hero;
