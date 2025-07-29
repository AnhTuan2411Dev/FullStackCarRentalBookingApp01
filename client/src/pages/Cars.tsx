import React, { useState, useEffect } from 'react'; // Import các hook React cần thiết
import { useLocation } from 'react-router-dom'; // Import hook để truy cập đối tượng vị trí URL
import { dummyCarData, assets, cityList, type DummyCarData } from '../assets/assets'; // Import dữ liệu xe giả, tài sản và danh sách thành phố
import CarCard from '../components/CarCard'; // Import component CarCard để hiển thị thông tin xe

const Cars = () => {
  const location = useLocation(); // Lấy đối tượng vị trí từ URL
  const [searchTerm, setSearchTerm] = useState(''); // State để lưu trữ từ khóa tìm kiếm
  const [filteredCars, setFilteredCars] = useState<DummyCarData[]>([]); // State để lưu trữ danh sách xe đã lọc
  const [showFilter, setShowFilter] = useState(false); // State để kiểm soát việc hiển thị bộ lọc
  const [filters, setFilters] = useState({ // State để lưu trữ các giá trị bộ lọc
    location: '', // Vị trí
    pickupDate: '', // Ngày nhận xe
    returnDate: '', // Ngày trả xe
  });

  // useEffect để phân tích các tham số URL và cập nhật bộ lọc
  useEffect(() => {
    const params = new URLSearchParams(location.search); // Tạo đối tượng URLSearchParams từ chuỗi truy vấn URL
    setFilters({ // Cập nhật state filters
      location: params.get('location') || '', // Lấy vị trí từ URL hoặc chuỗi rỗng
      pickupDate: params.get('pickupDate') || '', // Lấy ngày nhận xe từ URL hoặc chuỗi rỗng
      returnDate: params.get('returnDate') || '', // Lấy ngày trả xe từ URL hoặc chuỗi rỗng
    });
  }, [location.search]); // Chạy lại khi chuỗi truy vấn URL thay đổi

  // useEffect để lọc xe dựa trên từ khóa tìm kiếm và bộ lọc
  useEffect(() => {
    let tempCars = dummyCarData; // Khởi tạo danh sách xe tạm thời với tất cả dữ liệu xe

    // Lọc theo từ khóa tìm kiếm (hãng, mẫu, hoặc tính năng)
    if (searchTerm) {
      tempCars = tempCars.filter(car =>
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) || // Lọc theo hãng
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) || // Lọc theo mẫu
        car.transmission.toLowerCase().includes(searchTerm.toLowerCase()) // Lọc theo loại truyền động
      );
    }

    // Lọc theo URL (vị trí)
    if (filters.location) {
      tempCars = tempCars.filter(car => car.location === filters.location); // Lọc theo vị trí
    }
    // Logic lọc theo ngày đón và ngày trả có thể phức tạp hơn, tùy thuộc vào cách bạn quản lý ngày thuê xe.
    // Hiện tại, tôi sẽ bỏ qua phần này để tập trung vào hiển thị và lọc cơ bản.

    setFilteredCars(tempCars); // Cập nhật state filteredCars với danh sách xe đã lọc
  }, [searchTerm, filters]); // Chạy lại khi searchTerm hoặc filters thay đổi

  return (
    <>
      {/* Phần tiêu đề và thanh tìm kiếm */}
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        {/* Tiêu đề */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-semibold text-4xl md:text-[40px]">Xe hiện có</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2">
            Duyệt qua bộ sưu tập xe cao cấp của chúng tôi có sẵn cho cuộc phiêu lưu tiếp theo của bạn
          </p>
        </div>
        {/* Thanh tìm kiếm */}
        <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img alt="Search Icon" className="w-4.5 h-4.5 mr-2" src={assets.search_icon} />
          <input
            placeholder="Tìm kiếm theo hãng, mẫu, hoặc tính năng"
            className="w-full h-full outline-none text-gray-500"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật searchTerm khi người dùng nhập
          />
          <img
            alt="Filter Icon"
            className="w-4.5 h-4.5 ml-2 cursor-pointer"
            src={assets.filter_icon}
            onClick={() => setShowFilter(!showFilter)} // Chuyển đổi trạng thái hiển thị bộ lọc
          />
        </div>
        {/* Phần bộ lọc (hiển thị khi showFilter là true) */}
        {showFilter && (
          <div className="flex flex-col md:flex-row gap-4 mt-4 p-4 bg-white rounded-lg shadow w-full max-w-140">
            {/* Chọn vị trí */}
            <select
              className="p-2 border rounded-md w-full md:w-1/3"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })} // Cập nhật vị trí
            >
              <option value="">Chọn vị trí</option>
              {cityList.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {/* Nhập ngày đón */}
            <input
              type="date"
              className="p-2 border rounded-md w-full md:w-1/3"
              placeholder="Ngày đón"
              value={filters.pickupDate}
              onChange={(e) => setFilters({ ...filters, pickupDate: e.target.value })} // Cập nhật ngày đón
            />
            {/* Nhập ngày trả */}
            <input
              type="date"
              className="p-2 border rounded-md w-full md:w-1/3"
              placeholder="Ngày trả"
              value={filters.returnDate}
              onChange={(e) => setFilters({ ...filters, returnDate: e.target.value })} // Cập nhật ngày trả
            />
          </div>
        )}
      </div>

      {/* Phần hiển thị danh sách xe */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
          Hiển thị {filteredCars.length} Xe
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {filteredCars.map((car) => (
            <CarCard key={car._id} car={car} /> // Render CarCard cho mỗi xe
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars; // Xuất component Cars