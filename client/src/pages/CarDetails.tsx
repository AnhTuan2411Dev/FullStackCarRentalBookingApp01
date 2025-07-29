import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { assets, dummyCarData, type DummyCarData } from '../assets/assets';

// Component Loader cơ bản (có thể được cải thiện sau)
// Đây là một component đơn giản hiển thị trạng thái tải (loading)
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

// Component CarDetails hiển thị thông tin chi tiết của một chiếc xe
const CarDetails = () => {
  // Lấy `id` từ URL parameters để xác định xe cần hiển thị
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // State để lưu trữ thông tin xe được tìm thấy
  const [car, setCar] = useState<DummyCarData | null>(null);
  // State để quản lý trạng thái tải dữ liệu
  const [loading, setLoading] = useState(true);

  // useEffect hook để tìm kiếm thông tin xe khi component được mount hoặc `id` thay đổi
  useEffect(() => {
    setLoading(true); // Bắt đầu tải dữ liệu, đặt trạng thái loading là true
    // Tìm kiếm xe trong `dummyCarData` dựa trên `id`
    const foundCar = dummyCarData.find(c => c._id === id);
    if (foundCar) {
      // Nếu tìm thấy xe, cập nhật state `car`
      setCar(foundCar);
    }
    setLoading(false); // Kết thúc tải dữ liệu, đặt trạng thái loading là false
  }, [id]); // Dependency array: useEffect sẽ chạy lại khi `id` thay đổi

  // Hiển thị Loader nếu đang trong trạng thái tải dữ liệu
  if (loading) {
    return <Loader />;
  }

  // Hiển thị thông báo nếu không tìm thấy xe
  if (!car) {
    return <div className="text-center text-xl mt-16">Không tìm thấy xe.</div>;
  }

  // Lấy ngày hiện tại và ngày trả về mặc định (ví dụ: sau 7 ngày)
  const today = new Date(); // Tạo đối tượng Date cho ngày hiện tại
  const defaultReturnDate = new Date(today); // Tạo bản sao của ngày hiện tại
  defaultReturnDate.setDate(today.getDate() + 7); // Đặt ngày trả về mặc định là 7 ngày sau

  // Hàm định dạng ngày thành chuỗi 'YYYY-MM-DD'
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  // Định dạng các ngày cho input type="date"
  const minPickupDate = formatDate(today); // Ngày nhận xe tối thiểu (ngày hiện tại)
  const defaultPickupDate = formatDate(today); // Ngày nhận xe mặc định (ngày hiện tại)
  const defaultReturnDateFormatted = formatDate(defaultReturnDate); // Ngày trả xe mặc định (7 ngày sau)

  // Render giao diện người dùng với thông tin chi tiết xe và form đặt xe
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      {/* Nút quay lại danh sách tất cả xe */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
        <img alt="Back" className="rotate-180 opacity-65" src={assets.arrow_icon} />
        Quay lại tất cả xe
      </button>
      {/* Grid layout cho thông tin chi tiết xe và form đặt xe */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Phần hiển thị hình ảnh và thông tin chi tiết xe */}
        <div className="lg:col-span-2" style={{ opacity: 1, transform: 'none' }}>
          {/* Hình ảnh xe */}
          <img alt={car.model} className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md" src={car.image} style={{ opacity: 1, transform: 'none' }} />
          <div className="space-y-6" style={{ opacity: 1 }}>
            {/* Tên xe và thông tin cơ bản */}
            <div>
              <h1 className="text-3xl font-bold">{car.brand} {car.model}</h1>
              <p className="text-gray-500 text-lg">{car.category} • {car.year}</p>
            </div>
            <hr className="border-borderColor my-6" />
            {/* Các thông số kỹ thuật của xe (số chỗ, loại nhiên liệu, hộp số, vị trí) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Số chỗ ngồi */}
              <div className="flex flex-col items-center bg-light p-4 rounded-lg" style={{ opacity: 1, transform: 'none' }}>
                <img alt="Seats" className="h-5 mb-2" src={assets.users_icon} />
                {car.seating_capacity} Chỗ ngồi
              </div>
              {/* Loại nhiên liệu */}
              <div className="flex flex-col items-center bg-light p-4 rounded-lg" style={{ opacity: 1, transform: 'none' }}>
                <img alt="Fuel Type" className="h-5 mb-2" src={assets.fuel_icon} />
                {car.fuel_type}
              </div>
              {/* Hộp số */}
              <div className="flex flex-col items-center bg-light p-4 rounded-lg" style={{ opacity: 1, transform: 'none' }}>
                <img alt="Transmission" className="h-5 mb-2" src={assets.car_icon} />
                {car.transmission}
              </div>
              {/* Vị trí */}
              <div className="flex flex-col items-center bg-light p-4 rounded-lg" style={{ opacity: 1, transform: 'none' }}>
                <img alt="Location" className="h-5 mb-2" src={assets.location_icon} />
                {car.location}
              </div>
            </div>
            {/* Mô tả xe */}
            <div>
              <h1 className="text-xl font-medium mb-3">Mô tả</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>
            {/* Các tính năng của xe */}
            <div>
              <h1 className="text-xl font-medium mb-3">Tính năng</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Các tính năng giả định, có thể lấy từ dữ liệu xe nếu có */}
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />Camera 360</li>
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />Bluetooth</li>
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />GPS</li>
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />Ghế sưởi</li>
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />Gương chiếu hậu</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Form đặt xe */}
        <form className="shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500" style={{ opacity: 1, transform: 'none' }}>
          {/* Giá thuê xe mỗi ngày */}
          <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
            ${car.pricePerDay}
            <span className="text-base text-gray-400 font-normal">mỗi ngày</span>
          </p>
          <hr className="border-borderColor my-6" />
          {/* Input chọn ngày nhận xe */}
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Ngày nhận xe</label>
            <input className="border border-borderColor px-3 py-2 rounded-lg" required id="pickup-date" min={minPickupDate} type="date" defaultValue={defaultPickupDate} />
          </div>
          {/* Input chọn ngày trả xe */}
          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">Ngày trả xe</label>
            <input className="border border-borderColor px-3 py-2 rounded-lg" required id="return-date" type="date" defaultValue={defaultReturnDateFormatted} />
          </div>
          {/* Nút "Đặt ngay" */}
          <button className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer">
            Đặt ngay
          </button>
          {/* Thông báo không yêu cầu thẻ tín dụng */}
          <p className="text-center text-sm">Không yêu cầu thẻ tín dụng để đặt trước</p>
        </form>
      </div>
    </div>
  );
};

export default CarDetails;