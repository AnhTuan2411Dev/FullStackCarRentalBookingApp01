import React from 'react' // Import React
import { assets } from '../assets/assets'; // Import các tài sản (assets) từ thư mục assets

// Định nghĩa component Testimonial
const Testimonial = () => {
  // Mảng chứa dữ liệu các lời chứng thực (testimonials)
  const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: assets.testimonial_image_1, rating: 5, review: "Tôi đã thuê xe từ nhiều công ty khác nhau, nhưng trải nghiệm với CarRental thật đặc biệt." },
    { id: 2, name: "John Smith", address: "New York, USA", image: assets.testimonial_image_2, rating: 5, review: "CarRental đã giúp chuyến đi của tôi dễ dàng hơn rất nhiều. Xe được giao ngay tận nơi, và dịch vụ khách hàng thật tuyệt vời!" },
    { id: 3, name: "Ava Johnson", address: "Sydney, Australia", image: assets.testimonial_image_1, rating: 5, review: "Tôi rất khuyến khích CarRental! Đội xe của họ thật tuyệt vời, và tôi luôn cảm thấy mình nhận được ưu đãi tốt nhất cùng dịch vụ xuất sắc." }
  ];


  // Render giao diện của component
  return (
    // Container chính của phần lời chứng thực
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      {/* Tiêu đề và mô tả phần lời chứng thực */}
      <div className="flex flex-col justify-center items-center text-center false">
        <h1 className="font-semibold text-4xl md:text-[40px]">Khách hàng của chúng tôi nói gì</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">Khám phá lý do tại sao những du khách sành điệu chọn StayVenture cho chỗ ở sang trọng của họ trên khắp thế giới.</p>
      </div>

      {/* Grid hiển thị các lời chứng thực */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {/* Duyệt qua mảng testimonials và hiển thị từng lời chứng thực */}
        {testimonials.map((testimonial) => (
          // Card của từng lời chứng thực
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
            {/* Thông tin người đánh giá: ảnh, tên, địa chỉ */}
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            {/* Hiển thị sao đánh giá */}
            <div className="flex items-center gap-1 mt-4">
              {/* Tạo 5 sao */}
              {Array(5).fill(0).map((_, index) => (
                <img key={index} alt="star-icon" src={assets.star_icon} />
              ))}
            </div>
            {/* Nội dung lời đánh giá */}
            <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial; // Xuất component Testimonial để sử dụng ở nơi khác
