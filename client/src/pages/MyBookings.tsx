import React from 'react'
import { assets, dummyMyBookingsData } from '../assets/assets'

const MyBookings = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
            <div className="flex flex-col justify-center items-center text-center  md:items-start md:text-left">
                <h1 className="font-semibold text-4xl md:text-[40px]">My Bookings</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">View and manage your all car bookings</p>
            </div>
            <div>
                {dummyMyBookingsData.map((booking, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12">
                        <div className="md:col-span-1">
                            <div className="rounded-md overflow-hidden mb-3">
                                <img alt="" className="w-full h-auto aspect-video object-cover" src={booking.car.image} />
                            </div>
                            <p className="text-lg font-medium mt-2">{booking.car.brand} {booking.car.model}</p>
                            <p className="text-gray-500">{booking.car.year} • {booking.car.category} • {booking.car.location}</p>
                        </div>
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2">
                                <p className="px-3 py-1.5 bg-light rounded">Booking #{index + 1}</p>
                                <p className={`px-3 py-1 text-xs rounded-full ${booking.status === 'Đã xác nhận' ? 'bg-green-400/15 text-green-600' : 'bg-red-400/15 text-red-600'}`}>{booking.status}</p>
                            </div>
                            <div className="flex items-start gap-2 mt-3">
                                <img alt="" className="w-4 h-4 mt-1" src={assets.calendar_icon_colored} />
                                <div>
                                    <p className="text-gray-500">Rental Period</p>
                                    <p>{new Date(booking.pickupDate).toLocaleDateString()} To {new Date(booking.returnDate).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 mt-3">
                                <img alt="" className="w-4 h-4 mt-1" src={assets.location_icon_colored} />
                                <div>
                                    <p className="text-gray-500">Pick-up Location</p>
                                    <p>{booking.car.location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 flex flex-col justify-between gap-6">
                            <div className="text-sm text-gray-500 text-right">
                                <p>Total Price</p>
                                <h1 className="text-2xl font-semibold text-primary">${booking.price}</h1>
                                <p>Booked on {new Date(booking.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBookings