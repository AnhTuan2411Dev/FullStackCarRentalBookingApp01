// Import React và hook useState để quản lý trạng thái
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const minDate = `${year}-${month}-${day}`;

  const calculateMinReturnDate = () => {
    if (pickupDate) {
      const date = new Date(pickupDate);
      date.setDate(date.getDate() + 1);
      return date.toISOString().split('T')[0];
    }
    return minDate;
  };

  const minReturnDate = calculateMinReturnDate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Tạo URL với các tham số tìm kiếm
    const queryParams = new URLSearchParams();
    if (pickupLocation) queryParams.append('pickupLocation', pickupLocation);
    if (pickupDate) queryParams.append('pickupDate', pickupDate);
    if (returnDate) queryParams.append('returnDate', returnDate);

    navigate(`/car-list?${queryParams.toString()}`);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center"
      style={{ opacity: 1 }}>
      <h1 className="text-4xl md:text-5xl font-semibold" style={{ opacity: 1, transform: 'none' }}>
        Xe sang cho thuê
      </h1>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-start
      md:items-center justify-between p-6 rounded-lg md:rounded-full w-full
      max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
        style={{ opacity: 1, transform: 'none' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
          <div className="flex flex-col items-start gap-2">
            <select required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
              <option value="">Địa điểm nhận xe</option>
              {cityList.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : 'Vui lòng chọn địa điểm'}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Ngày nhận xe</label>
            <input id="pickup-date" min={minDate}
              className="text-sm text-gray-500" required type="date"
              value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Ngày trả xe</label>
            <input id="return-date" min={minReturnDate}
              className="text-sm text-gray-500" required type="date"
              value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer" tabIndex={0}>
          <img alt="search" className="brightness-300" src={assets.search_icon} />
          Tìm kiếm
        </button>
      </form>
      <img alt="car" className="max-h-74" src={assets.main_car} style={{ opacity: 1, transform: 'none' }} />
    </div>
  );
};

// Export component Hero để sử dụng ở nơi khác
export default Hero;
