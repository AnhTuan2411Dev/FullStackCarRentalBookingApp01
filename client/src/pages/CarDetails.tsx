import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { assets, dummyCarData, type DummyCarData } from '../assets/assets';
import { useDateContext } from '../context/DateContext';

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
  const location = useLocation(); // Sử dụng useLocation để lấy query params
  
  // Sử dụng DateContext để lấy và cập nhật ngày tháng
  const { 
    pickupDate: contextPickupDate, 
    returnDate: contextReturnDate, 
    setPickupDate, 
    setReturnDate 
  } = useDateContext();

  const [car, setCar] = useState<DummyCarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [localPickupDate, setLocalPickupDate] = useState('');
  const [localReturnDate, setLocalReturnDate] = useState('');

  useEffect(() => {
    setLoading(true);
    const foundCar = dummyCarData.find(c => c._id === id);
    if (foundCar) {
      setCar(foundCar);
    }

    // Lấy ngày từ URL query params hoặc context
    const queryParams = new URLSearchParams(location.search);
    const urlPickupDate = queryParams.get('pickupDate');
    const urlReturnDate = queryParams.get('returnDate');

    const today = new Date();
    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    // Ưu tiên context, sau đó URL params, cuối cùng là giá trị mặc định
    const finalPickupDate = contextPickupDate || urlPickupDate || formatDate(today);
    const finalReturnDate = contextReturnDate || urlReturnDate || (() => {
      const defaultReturn = new Date(today);
      defaultReturn.setDate(today.getDate() + 7);
      return formatDate(defaultReturn);
    })();

    setLocalPickupDate(finalPickupDate);
    setLocalReturnDate(finalReturnDate);

    // Cập nhật context nếu có giá trị từ URL và context chưa có
    if (!contextPickupDate && urlPickupDate) {
      setPickupDate(urlPickupDate);
    }
    if (!contextReturnDate && urlReturnDate) {
      setReturnDate(urlReturnDate);
    }

    setLoading(false);
  }, [id, location.search, contextPickupDate, contextReturnDate, setPickupDate, setReturnDate]);

  const calculateMinReturnDate = () => {
    if (localPickupDate) {
      const date = new Date(localPickupDate);
      date.setDate(date.getDate() + 1);
      return date.toISOString().split('T')[0];
    }
    return new Date().toISOString().split('T')[0]; // Fallback to today
  };

  const handlePickupDateChange = (newDate: string) => {
    setLocalPickupDate(newDate);
    setPickupDate(newDate); // Cập nhật context
    
    // Tự động cập nhật ngày trả xe nếu cần thiết
    if (!localReturnDate || new Date(localReturnDate) <= new Date(newDate)) {
      const newReturnDate = new Date(newDate);
      newReturnDate.setDate(newReturnDate.getDate() + 1);
      const formattedReturnDate = newReturnDate.toISOString().split('T')[0];
      setLocalReturnDate(formattedReturnDate);
      setReturnDate(formattedReturnDate); // Cập nhật context
    }
  };

  const handleReturnDateChange = (newDate: string) => {
    setLocalReturnDate(newDate);
    setReturnDate(newDate); // Cập nhật context
  };

  if (loading) {
    return <Loader />;
  }

  if (!car) {
    return <div className="text-center text-xl mt-16">Không tìm thấy xe.</div>;
  }

  const minPickupDate = new Date().toISOString().split('T')[0];
  const minReturnDate = calculateMinReturnDate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
        <img alt="Back" className="rotate-180 opacity-65" src={assets.arrow_icon} />
        Quay lại tất cả xe
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2" style={{ opacity: 1, transform: 'none' }}>
          <img alt={car.model} className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md" src={car.image} style={{ opacity: 1, transform: 'none' }} />
          <div className="space-y-6" style={{ opacity: 1 }}>
            <div>
              <h1 className="text-3xl font-bold">{car.brand} {car.model}</h1>
              <p className="text-gray-500 text-lg">{car.category} • {car.year}</p>
            </div>
            <hr className="border-borderColor my-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center bg-light p-4 rounded-lg" style={{ opacity: 1, transform: 'none' }}>
                <img alt="Seats" className="h-5 mb-2" src={assets.users_icon} />
                {car.seating_capacity} Chỗ ngồi
              </div>
              <div className="flex flex-col items-center bg-light p-4 rounded-lg" style={{ opacity: 1, transform: 'none' }}>
                <img alt="Fuel Type" className="h-5 mb-2" src={assets.fuel_icon} />
                {car.fuel_type}
              </div>
              <div className="flex flex-col items-center bg-light p-4 rounded-lg" style={{ opacity: 1, transform: 'none' }}>
                <img alt="Transmission" className="h-5 mb-2" src={assets.car_icon} />
                {car.transmission}
              </div>
              <div className="flex flex-col items-center bg-light p-4 rounded-lg" style={{ opacity: 1, transform: 'none' }}>
                <img alt="Location" className="h-5 mb-2" src={assets.location_icon} />
                {car.location}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-medium mb-3">Mô tả</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>
            <div>
              <h1 className="text-xl font-medium mb-3">Tính năng</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />Camera 360</li>
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />Bluetooth</li>
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />GPS</li>
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />Ghế sưởi</li>
                <li className="flex items-center text-gray-500"><img className="h-4 mr-2" alt="" src={assets.check_icon} />Gương chiếu hậu</li>
              </ul>
            </div>
          </div>
        </div>
        <form className="shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500" style={{ opacity: 1, transform: 'none' }}>
          <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
            ${car.pricePerDay}
            <span className="text-base text-gray-400 font-normal">mỗi ngày</span>
          </p>
          <hr className="border-borderColor my-6" />
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Ngày nhận xe</label>
            <input
              className="border border-borderColor px-3 py-2 rounded-lg"
              required
              id="pickup-date"
              min={minPickupDate}
              type="date"
              value={localPickupDate}
              onChange={(e) => handlePickupDateChange(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">Ngày trả xe</label>
            <input
              className="border border-borderColor px-3 py-2 rounded-lg"
              required
              id="return-date"
              min={minReturnDate}
              type="date"
              value={localReturnDate}
              onChange={(e) => handleReturnDateChange(e.target.value)}
            />
          </div>
          <button className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer">
            Đặt ngay
          </button>
          <p className="text-center text-sm">Không yêu cầu thẻ tín dụng để đặt trước</p>
        </form>
      </div>
    </div>
  );
};

export default CarDetails;