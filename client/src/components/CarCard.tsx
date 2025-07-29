// Import React để sử dụng các thành phần React
import React from 'react';
// Import assets chứa các icon và dữ liệu xe giả định
import { assets } from '../assets/assets';
// Import kiểu dữ liệu DummyCarData từ assets
import type { DummyCarData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

// Định nghĩa giao diện cho props của thành phần CarCard
interface CarCardProps {
    car: DummyCarData; // Dữ liệu của một chiếc xe
    pickupDate?: string; // Ngày nhận xe (tùy chọn)
    returnDate?: string; // Ngày trả xe (tùy chọn)
}

// Thành phần CarCard hiển thị thông tin chi tiết của một chiếc xe
const CarCard: React.FC<CarCardProps> = ({ car, pickupDate, returnDate }) => {
    // Lấy đơn vị tiền tệ từ biến môi trường
    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();

    const handleCardClick = () => {
        // Tạo query params để truyền ngày tháng
        const queryParams = new URLSearchParams();
        if (pickupDate) queryParams.append('pickupDate', pickupDate);
        if (returnDate) queryParams.append('returnDate', returnDate);
        
        const queryString = queryParams.toString();
        const url = queryString ? `/car-details/${car._id}?${queryString}` : `/car-details/${car._id}`;
        
        navigate(url);
        window.scrollTo(0, 0);
    };

    return (
        // Container chính của thẻ xe, với hiệu ứng đổ bóng và di chuột
        <div onClick={handleCardClick}
            className="group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer">
            {/* Phần hình ảnh xe */}
            <div className="relative h-48 overflow-hidden">
                {/* Hình ảnh xe */}
                <img alt="Car Image"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={car.image} />
                {/* Trạng thái xe (có sẵn/không có sẵn) */}
                <p className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full">
                    {car.isAvaliable ? "Hiện có sẵn" : "Không có sẵn"}
                </p>
                {/* Giá thuê xe mỗi ngày */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                    <span className="font-semibold">{currency}{car.pricePerDay}</span>
                    <span className="text-sm text-white/80"> / ngày</span>
                </div>
            </div>
            {/* Phần thông tin chi tiết xe */}
            <div className="p-4 sm:p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        {/* Tên thương hiệu và mẫu xe */}
                        <h3 className="text-lg font-medium">{car.brand} {car.model}</h3>
                        {/* Danh mục và năm sản xuất */}
                        <p className="text-muted-foreground text-sm">{car.category} • {car.year}</p>
                    </div>
                </div>
                {/* Các thông số kỹ thuật khác của xe */}
                <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600">
                    {/* Sức chứa */}
                    <div className="flex items-center text-sm text-muted-foreground">
                        <img alt="Seating Capacity Icon" className="h-4 mr-2" src={assets.users_icon} />
                        <span>{car.seating_capacity} Chỗ</span>
                    </div>
                    {/* Loại nhiên liệu */}
                    <div className="flex items-center text-sm text-muted-foreground">
                        <img alt="Fuel Type Icon" className="h-4 mr-2" src={assets.fuel_icon} />
                        <span>{car.fuel_type}</span>
                    </div>
                    {/* Hộp số */}
                    <div className="flex items-center text-sm text-muted-foreground">
                        <img alt="Transmission Icon" className="h-4 mr-2" src={assets.car_icon} />
                        <span>{car.transmission}</span>
                    </div>
                    {/* Vị trí */}
                    <div className="flex items-center text-sm text-muted-foreground">
                        <img alt="Location Icon" className="h-4 mr-2" src={assets.location_icon} />
                        <span>{car.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Xuất thành phần CarCard để sử dụng ở nơi khác
export default CarCard;