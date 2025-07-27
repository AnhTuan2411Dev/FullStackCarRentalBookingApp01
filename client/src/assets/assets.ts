// Import các biểu tượng và hình ảnh cho ứng dụng
import logo from "./logo.svg"; // Logo chính của ứng dụng
import gmail_logo from "./gmail_logo.svg"; // Biểu tượng Gmail
import facebook_logo from "./facebook_logo.svg"; // Biểu tượng Facebook
import instagram_logo from "./instagram_logo.svg"; // Biểu tượng Instagram
import twitter_logo from "./twitter_logo.svg"; // Biểu tượng Twitter
import menu_icon from "./menu_icon.svg"; // Biểu tượng menu
import search_icon from "./search_icon.svg"; // Biểu tượng tìm kiếm
import close_icon from "./close_icon.svg"; // Biểu tượng đóng
import users_icon from "./users_icon.svg"; // Biểu tượng người dùng
import car_icon from "./car_icon.svg"; // Biểu tượng xe hơi
import location_icon from "./location_icon.svg"; // Biểu tượng vị trí
import fuel_icon from "./fuel_icon.svg"; // Biểu tượng nhiên liệu
import addIcon from "./addIcon.svg"; // Biểu tượng thêm
import carIcon from "./carIcon.svg"; // Biểu tượng xe hơi
import carIconColored from "./carIconColored.svg"; // Biểu tượng xe hơi có màu
import dashboardIcon from "./dashboardIcon.svg"; // Biểu tượng bảng điều khiển
import dashboardIconColored from "./dashboardIconColored.svg"; // Biểu tượng bảng điều khiển có màu
import addIconColored from "./addIconColored.svg"; // Biểu tượng thêm có màu
import listIcon from "./listIcon.svg"; // Biểu tượng danh sách
import listIconColored from "./listIconColored.svg"; // Biểu tượng danh sách có màu
import cautionIconColored from "./cautionIconColored.svg"; // Biểu tượng cảnh báo có màu
import arrow_icon from "./arrow_icon.svg"; // Biểu tượng mũi tên
import star_icon from "./star_icon.svg"; // Biểu tượng ngôi sao
import check_icon from "./check_icon.svg"; // Biểu tượng dấu tích
import tick_icon from "./tick_icon.svg"; // Biểu tượng dấu tích (khác)
import delete_icon from "./delete_icon.svg"; // Biểu tượng xóa
import eye_icon from "./eye_icon.svg"; // Biểu tượng mắt (hiện)
import eye_close_icon from "./eye_close_icon.svg"; // Biểu tượng mắt (ẩn)
import filter_icon from "./filter_icon.svg"; // Biểu tượng lọc
import edit_icon from "./edit_icon.svg"; // Biểu tượng chỉnh sửa
import calendar_icon_colored from "./calendar_icon_colored.svg"; // Biểu tượng lịch có màu
import location_icon_colored from "./location_icon_colored.svg"; // Biểu tượng vị trí có màu
import testimonial_image_1 from "./testimonial_image_1.png"; // Hình ảnh đánh giá 1
import testimonial_image_2 from "./testimonial_image_2.png"; // Hình ảnh đánh giá 2
import main_car from "./main_car.png"; // Hình ảnh xe chính
import banner_car_image from "./banner_car_image.png"; // Hình ảnh xe trên banner
import user_profile from "./user_profile.png"; // Hình ảnh hồ sơ người dùng
import upload_icon from "./upload_icon.svg"; // Biểu tượng tải lên
import car_image1 from "./car_image1.png"; // Hình ảnh xe 1
import car_image2 from "./car_image2.png"; // Hình ảnh xe 2
import car_image3 from "./car_image3.png"; // Hình ảnh xe 3
import car_image4 from "./car_image4.png"; // Hình ảnh xe 4

export const cityList: string[] = ['New York', 'Los Angeles', 'Houston', 'Chicago']; // Giữ nguyên tên thành phố tiếng Anh vì đây là dữ liệu địa lý

// Đối tượng chứa tất cả các tài sản (biểu tượng, hình ảnh) được import
export const assets = {
    logo, // Logo chính của ứng dụng
    gmail_logo, // Biểu tượng Gmail
    facebook_logo, // Biểu tượng Facebook
    instagram_logo, // Biểu tượng Instagram
    twitter_logo, // Biểu tượng Twitter
    menu_icon, // Biểu tượng menu
    search_icon, // Biểu tượng tìm kiếm
    close_icon, // Biểu tượng đóng
    users_icon, // Biểu tượng người dùng
    edit_icon, // Biểu tượng chỉnh sửa
    car_icon, // Biểu tượng xe hơi
    location_icon, // Biểu tượng vị trí
    fuel_icon, // Biểu tượng nhiên liệu
    addIcon, // Biểu tượng thêm
    carIcon, // Biểu tượng xe hơi
    carIconColored, // Biểu tượng xe hơi có màu
    dashboardIcon, // Biểu tượng bảng điều khiển
    dashboardIconColored, // Biểu tượng bảng điều khiển có màu
    addIconColored, // Biểu tượng thêm có màu
    listIcon, // Biểu tượng danh sách
    listIconColored, // Biểu tượng danh sách có màu
    cautionIconColored, // Biểu tượng cảnh báo có màu
    calendar_icon_colored, // Biểu tượng lịch có màu
    location_icon_colored, // Biểu tượng vị trí có màu
    arrow_icon, // Biểu tượng mũi tên
    star_icon, // Biểu tượng ngôi sao
    check_icon, // Biểu tượng dấu tích
    tick_icon, // Biểu tượng dấu tích (khác)
    delete_icon, // Biểu tượng xóa
    eye_icon, // Biểu tượng mắt (hiện)
    eye_close_icon, // Biểu tượng mắt (ẩn)
    filter_icon, // Biểu tượng lọc
    testimonial_image_1, // Hình ảnh đánh giá 1
    testimonial_image_2, // Hình ảnh đánh giá 2
    main_car, // Hình ảnh xe chính
    banner_car_image, // Hình ảnh xe trên banner
    car_image1, // Hình ảnh xe 1
    upload_icon, // Biểu tượng tải lên
    user_profile, // Hình ảnh hồ sơ người dùng
    car_image2, // Hình ảnh xe 2
    car_image3, // Hình ảnh xe 3
    car_image4 // Hình ảnh xe 4
};

// Định nghĩa interface cho liên kết menu
interface MenuLink {
    name: string; // Tên hiển thị của liên kết
    path: string; // Đường dẫn của liên kết
}

// Mảng các liên kết menu chính
export const menuLinks: MenuLink[] = [
    { name: "Trang chủ", path: "/" }, // Liên kết đến trang chủ
    { name: "Xe", path: "/cars" }, // Liên kết đến trang danh sách xe
    { name: "Đặt chỗ của tôi", path: "/my-bookings" }, // Liên kết đến trang đặt chỗ của người dùng
];

// Định nghĩa interface cho liên kết menu của chủ sở hữu
interface OwnerMenuLink {
    name: string; // Tên hiển thị của liên kết
    path: string; // Đường dẫn của liên kết
    icon: string; // Biểu tượng của liên kết
    coloredIcon: string; // Biểu tượng có màu của liên kết
}

// Mảng các liên kết menu dành cho chủ sở hữu
export const ownerMenuLinks: OwnerMenuLink[] = [
    { name: "Bảng điều khiển", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored }, // Liên kết đến bảng điều khiển chủ sở hữu
    { name: "Thêm xe", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored }, // Liên kết đến trang thêm xe
    { name: "Quản lý xe", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored }, // Liên kết đến trang quản lý xe
    { name: "Quản lý đặt chỗ", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored }, // Liên kết đến trang quản lý đặt chỗ
];

// Định nghĩa interface cho dữ liệu người dùng giả
interface DummyUserData {
    _id: string; // ID của người dùng
    name: string; // Tên người dùng
    email: string; // Email người dùng
    role: string; // Vai trò người dùng (ví dụ: "owner", "user")
    image: string; // Đường dẫn hình ảnh người dùng
}

// Dữ liệu người dùng giả (ví dụ: cho mục đích phát triển/thử nghiệm)
export const dummyUserData: DummyUserData = {
  "_id": "6847f7cab3d8daecdb517095", // ID người dùng
  "name": "GreatStack", // Tên người dùng
  "email": "admin@example.com", // Email người dùng
  "role": "owner", // Vai trò người dùng
  "image": user_profile, // Hình ảnh hồ sơ người dùng
};

// Định nghĩa interface cho dữ liệu xe giả
interface DummyCarData {
    _id: string; // ID của xe
    owner: string; // ID chủ sở hữu xe
    brand: string; // Hãng xe
    model: string; // Mẫu xe
    image: string; // Đường dẫn hình ảnh xe
    year: number; // Năm sản xuất
    category: string; // Loại xe (ví dụ: SUV, Sedan)
    seating_capacity: number; // Sức chứa chỗ ngồi
    fuel_type: string; // Loại nhiên liệu
    transmission: string; // Hộp số (ví dụ: Tự động, Bán tự động, Thủ công)
    pricePerDay: number; // Giá thuê mỗi ngày
    location: string; // Địa điểm xe
    description: string; // Mô tả xe
    isAvaliable: boolean; // Trạng thái sẵn có của xe
    createdAt: string; // Thời gian tạo dữ liệu xe
}

// Mảng dữ liệu xe giả
export const dummyCarData: DummyCarData[] = [
    {
        "_id": "67ff5bc069c03d4e45f30b77", // ID xe
        "owner": "67fe3467ed8a8fe17d0ba6e2", // ID chủ sở hữu
        "brand": "BMW", // Hãng xe
        "model": "X5", // Mẫu xe
        "image": car_image1, // Hình ảnh xe
        "year": 2006, // Năm sản xuất
        "category": "SUV", // Loại xe
        "seating_capacity": 4, // Sức chứa
        "fuel_type": "Hybrid", // Loại nhiên liệu
        "transmission": "Bán tự động", // Hộp số
        "pricePerDay": 300, // Giá mỗi ngày
        "location": "New York", // Địa điểm
        "description": "BMW X5 là một chiếc SUV hạng sang cỡ trung do BMW sản xuất. X5 ra mắt vào năm 1999 là chiếc SUV đầu tiên được sản xuất bởi BMW.", // Mô tả
        "isAvaliable": true, // Có sẵn
        "createdAt": "2025-04-16T07:26:56.215Z", // Thời gian tạo
    },
    {
        "_id": "67ff6b758f1b3684286a2a65", // ID xe
        "owner": "67fe3467ed8a8fe17d0ba6e2", // ID chủ sở hữu
        "brand": "Toyota", // Hãng xe
        "model": "Corolla", // Mẫu xe
        "image": car_image2, // Hình ảnh xe
        "year": 2021, // Năm sản xuất
        "category": "Sedan", // Loại xe
        "seating_capacity": 4, // Sức chứa
        "fuel_type": "Diesel", // Loại nhiên liệu
        "transmission": "Thủ công", // Hộp số
        "pricePerDay": 130, // Giá mỗi ngày
        "location": "Chicago", // Địa điểm
        "description": "Toyota Corolla là một chiếc sedan hạng sang cỡ trung do Toyota sản xuất. Corolla ra mắt vào năm 2008 là chiếc sedan đầu tiên được sản xuất bởi Toyota.", // Mô tả
        "isAvaliable": true, // Có sẵn
        "createdAt": "2025-04-16T08:33:57.993Z", // Thời gian tạo
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68", // ID xe
        "owner": "67fe3467ed8a8fe17d0ba6e2", // ID chủ sở hữu
        "brand": "Jeep ", // Hãng xe
        "model": "Wrangler", // Mẫu xe
        "image": car_image3, // Hình ảnh xe
        "year": 2023, // Năm sản xuất
        "category": "SUV", // Loại xe
        "seating_capacity": 4, // Sức chứa
        "fuel_type": "Hybrid", // Loại nhiên liệu
        "transmission": "Tự động", // Hộp số
        "pricePerDay": 200, // Giá mỗi ngày
        "location": "Los Angeles", // Địa điểm
        "description": "Jeep Wrangler là một chiếc SUV hạng sang cỡ trung do Jeep sản xuất. Wrangler ra mắt vào năm 2003 là chiếc SUV đầu tiên được sản xuất bởi Jeep.", // Mô tả
        "isAvaliable": true, // Có sẵn
        "createdAt": "2025-04-16T08:34:39.592Z", // Thời gian tạo
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34", // ID xe
        "owner": "67fe3467ed8a8fe17d0ba6e2", // ID chủ sở hữu
        "brand": "Ford", // Hãng xe
        "model": "Neo 6", // Mẫu xe
        "image": car_image4, // Hình ảnh xe
        "year": 2022, // Năm sản xuất
        "category": "Sedan", // Loại xe
        "seating_capacity": 2, // Sức chứa
        "fuel_type": "Diesel", // Loại nhiên liệu
        "transmission": "Bán tự động", // Hộp số
        "pricePerDay": 209, // Giá mỗi ngày
        "location": "Houston", // Địa điểm
        "description": "Đây là một chiếc sedan hạng sang cỡ trung do Toyota sản xuất. Corolla ra mắt vào năm 2008 là chiếc sedan đầu tiên được sản xuất bởi Toyota.", // Mô tả
        "isAvaliable": true, // Có sẵn
        "createdAt": "2025-04-17T06:15:47.318Z", // Thời gian tạo
    }
];

// Định nghĩa interface cho dữ liệu đặt chỗ giả của tôi
interface DummyMyBookingsData {
    _id: string; // ID đặt chỗ
    car: DummyCarData; // Dữ liệu xe được đặt
    user: string; // ID người dùng đặt xe
    owner: string; // ID chủ sở hữu xe
    pickupDate: string; // Ngày nhận xe
    returnDate: string; // Ngày trả xe
    status: string; // Trạng thái đặt chỗ (ví dụ: "Đã xác nhận", "Đang chờ xử lý")
    price: number; // Giá thuê
    createdAt: string; // Thời gian tạo đặt chỗ
}

// Mảng dữ liệu đặt chỗ giả của tôi
export const dummyMyBookingsData: DummyMyBookingsData[] = [
    {
        "_id": "68482bcc98eb9722b7751f70", // ID đặt chỗ
        "car": dummyCarData[0], // Xe được đặt (lấy từ dummyCarData đầu tiên)
        "user": "6847f7cab3d8daecdb517095", // ID người dùng
        "owner": "6847f7cab3d8daecdb517095", // ID chủ sở hữu
        "pickupDate": "2025-06-13T00:00:00.000Z", // Ngày nhận xe
        "returnDate": "2025-06-14T00:00:00.000Z", // Ngày trả xe
        "status": "Đã xác nhận", // Trạng thái
        "price": 440, // Giá
        "createdAt": "2025-06-10T12:57:48.244Z", // Thời gian tạo
    },
    {
        "_id": "68482bb598eb9722b7751f60", // ID đặt chỗ
        "car": dummyCarData[1], // Xe được đặt (lấy từ dummyCarData thứ hai)
        "user": "6847f7cab3d8daecdb517095", // ID người dùng
        "owner": "67fe3467ed8a8fe17d0ba6e2", // ID chủ sở hữu
        "pickupDate": "2025-06-12T00:00:00.000Z", // Ngày nhận xe
        "returnDate": "2025-06-12T00:00:00.000Z", // Ngày trả xe
        "status": "Đang chờ xử lý", // Trạng thái
        "price": 130, // Giá
        "createdAt": "2025-06-10T12:57:25.613Z", // Thời gian tạo
    },
    {
        "_id": "684800fa0fb481c5cfd92e56", // ID đặt chỗ
        "car": dummyCarData[2], // Xe được đặt (lấy từ dummyCarData thứ ba)
        "user": "6847f7cab3d8daecdb517095", // ID người dùng
        "owner": "67fe3467ed8a8fe17d0ba6e2", // ID chủ sở hữu
        "pickupDate": "2025-06-11T00:00:00.000Z", // Ngày nhận xe
        "returnDate": "2025-06-12T00:00:00.000Z", // Ngày trả xe
        "status": "Đang chờ xử lý", // Trạng thái
        "price": 600, // Giá
        "createdAt": "2025-06-10T09:55:06.379Z", // Thời gian tạo
    },
    {
        "_id": "6847fe790fb481c5cfd92d94", // ID đặt chỗ
        "car": dummyCarData[3], // Xe được đặt (lấy từ dummyCarData thứ tư)
        "user": "6847f7cab3d8daecdb517095", // ID người dùng
        "owner": "6847f7cab3d8daecdb517095", // ID chủ sở hữu
        "pickupDate": "2025-06-11T00:00:00.000Z", // Ngày nhận xe
        "returnDate": "2025-06-12T00:00:00.000Z", // Ngày trả xe
        "status": "Đã xác nhận", // Trạng thái
        "price": 440, // Giá
        "createdAt": "2025-06-10T09:44:25.410Z", // Thời gian tạo
    }
];

// Định nghĩa interface cho dữ liệu bảng điều khiển giả
interface DummyDashboardData {
    totalCars: number; // Tổng số xe
    totalBookings: number; // Tổng số lượt đặt chỗ
    pendingBookings: number; // Số lượt đặt chỗ đang chờ xử lý
    completedBookings: number; // Số lượt đặt chỗ đã hoàn thành
    recentBookings: DummyMyBookingsData[]; // Danh sách các đặt chỗ gần đây
    monthlyRevenue: number; // Doanh thu hàng tháng
}

// Dữ liệu bảng điều khiển giả
export const dummyDashboardData: DummyDashboardData = {
    "totalCars": 4, // Tổng số xe
    "totalBookings": 2, // Tổng số lượt đặt chỗ
    "pendingBookings": 0, // Số lượt đặt chỗ đang chờ xử lý
    "completedBookings": 2, // Số lượt đặt chỗ đã hoàn thành
    "recentBookings": [ // Các đặt chỗ gần đây
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840 // Doanh thu hàng tháng
};