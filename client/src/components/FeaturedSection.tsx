// Import React để sử dụng các thành phần React
import React from 'react'
// Import thành phần Title
import Title from './Title'
// Import assets chứa các icon và dữ liệu xe giả định, cùng với dummyCarData
import { assets, dummyCarData } from '../assets/assets'
// Import thành phần CarCard
import CarCard from './CarCard'
// Import hook useNavigate từ react-router-dom để điều hướng
import { useNavigate } from 'react-router-dom'

// Thành phần FeaturedSection hiển thị các xe nổi bật
const FeaturedSection = () => {
  // Sử dụng hook useNavigate để có chức năng điều hướng
  const navigate = useNavigate();
  return (
    // Container chính của phần nổi bật, với các thuộc tính flexbox và padding
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      {/* Phần tiêu đề */}
      <div>
        {/* Sử dụng thành phần Title để hiển thị tiêu đề và phụ đề */}
        <Title title="Xe Nổi Bật" subTitle="Khám phá bộ sưu tập xe cao cấp của chúng tôi, sẵn sàng cho cuộc phiêu lưu tiếp theo của bạn." align="center" />
      </div>
      {/* Lưới hiển thị các thẻ xe */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
        {
          // Lặp qua 6 xe đầu tiên từ dummyCarData và hiển thị chúng bằng CarCard
          dummyCarData.slice(0, 6).map((car) => (
            <div key={car._id}>
              <CarCard car={car} />
            </div>
          ))

        }
      </div>
      {/* Nút "Explore all cars" */}
      <button onClick={() => {
        // Điều hướng đến trang /cars khi nhấp vào nút
        navigate('/cars');
        // Cuộn lên đầu trang
        window.scrollTo(0, 0);
      }}
        className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
        Khám phá tất cả xe <img src={assets.arrow_icon} /> {/* Icon mũi tên */}
      </button>
    </div>
  )
}

// Xuất thành phần FeaturedSection để sử dụng ở nơi khác
export default FeaturedSection
