// Import các tài nguyên (assets) và liên kết menu từ tệp assets.ts
import { assets, menuLinks } from '../assets/assets'
// Import các hook từ react-router-dom để điều hướng và lấy thông tin vị trí
import { Link, useLocation, useNavigate } from 'react-router-dom'
// Import useState hook từ React để quản lý trạng thái
import { useState } from 'react'

// Định nghĩa component Navbar với props setShowLogin
const Navbar = ({ setShowLogin }: { setShowLogin: (show: boolean) => void }) => {
    // Lấy đối tượng location hiện tại từ react-router-dom để kiểm tra đường dẫn
    const location = useLocation();
    // Khai báo state 'open' để điều khiển việc mở/đóng menu di động
    const [open, setOpen] = useState(false);
    // Lấy hàm navigate từ react-router-dom để điều hướng chương trình
    const navigate = useNavigate();
    return (
        // Container chính của Navbar với các lớp Tailwind CSS cho bố cục và kiểu dáng
        <div className={`flex items-center justify-between
        px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600
        border-b border-borderColor relative transition-all
        ${location.pathname === "/" && "bg-light"}`}>
            {/* Logo trang web, khi click sẽ điều hướng về trang chủ */}
            <Link to="/" data-discover="true">
                <img alt="logo" className="h-8" src={assets.logo} />
            </Link>
            {/* Menu điều hướng chính, có thể thu gọn trên thiết bị di động */}
            <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full
                max-sm:top-16 max-sm:border-t border-borderColor right-0
                flex flex-col sm:flex-row items-start sm:items-center
                gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50
                ${location.pathname === "/" ? "bg-light" : "bg-white"}
                ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
                {/* Duyệt qua mảng menuLinks để tạo các liên kết điều hướng */}
                {menuLinks.map((link, index) => (
                    <Link to={link.path} key={index} data-discover="true"
                        onClick={() => setOpen(false)}>{link.name}</Link>
                ))}
                {/* Phần tìm kiếm xe (chỉ hiển thị trên màn hình lớn) */}
                <div className="hidden lg:flex items-center text-sm gap-2 border
                border-borderColor px-3 rounded-full max-w-56">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        placeholder="Search cars" type="text" />
                    <img alt="search" src={assets.search_icon} />
                </div>
                {/* Các nút "List cars" và "Login" */}
                <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
                    {/* Nút "List cars", điều hướng đến trang chủ sở hữu khi click */}
                    <button onClick={() => navigate("/owner")} className="cursor-pointer">List cars</button>
                    {/* Nút "Login", hiển thị form đăng nhập khi click */}
                    <button onClick={() => setShowLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg">Login</button>
                </div>
            </div>
            {/* Nút menu dành cho thiết bị di động (ẩn trên màn hình lớn) */}
            <button className="sm:hidden cursor-pointer" aria-label="Menu" onClick={() => setOpen(!open)}>
                {/* Hiển thị icon đóng nếu menu đang mở, ngược lại hiển thị icon menu */}
                <img alt="menu" src={open ? assets.close_icon : assets.menu_icon} />
            </button>
        </div>
    )
}

// Export component Navbar để có thể sử dụng ở các nơi khác
export default Navbar
