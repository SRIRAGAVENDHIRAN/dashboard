import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Edit, Eye, Search, Trash2 } from 'lucide-react';

const orderData = [
    {id: 1, customerName:"Dhana", status: "Processing", total: "135.40", date: "2025-04-01"},
    {id: 2, customerName:"Sayana", status: "Delivered", total: "120.01", date: "2025-04-01"},
    {id: 3, customerName:"Swathi", status: "Pending", total: "121.15", date: "2025-04-01"},
    {id: 4, customerName:"Pavithra", status: "Delivered", total: "150.99", date: "2025-04-01"},
    {id: 5, customerName:"Swetha", status: "Shipped", total: "120.20", date: "2025-04-01"},
]

const OrdersTable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setsearchTerm(term);
        const filteration = orderData.filter(
            (order) => order.id.toLowerCase().includes(term) || order.name.toLowerCase().includes(term)
        );
        setFilteredOrders(filteration)
    }

  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-yellow-300"
    initial={{opacity: 0,y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.2}}
    >
    <div className="flex justify-between items-center mb-6">
            <h2 className='text-xl font-semibold text-gray-100'>Orders</h2>
            <div className="relative  overflow-x-auto">
                <input type="text" placeholder="Search Orders..."
                className='bg-yellow-800 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none
                focus:ring-2 focus:ring-yellow-300' 
                onChange={handleSearch}
                value={searchTerm}/>
                <Search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
            </div>
        </div>
        <div className="overflow-x-auto">
        <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Order ID
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Customer
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Total
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Status
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Date
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {filteredOrders.map(order => (
                        <motion.tr key={order.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.3}}>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                {order.id}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                {order.customerName}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                {order.total}
                            </td>
                            <td className='px-6 py-6 whitespace-nowrap text-sm text-gray-300'>
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    order.status === "Delivered" ? "bg-green-100 text-green-800": 
                                    order.status === "Processing" ? "bg-orange-100 text-orange-800":order.status === "Shipped" ? "bg-cyan-100 text-cyan-800": 
                                    "bg-red-100 text-red-800"
                                }`}>{order.status}</span>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                                {order.date}
                            </td>               
                            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-300">
                            <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                                    <Eye size={18}/>
                                </button>
                            </td>

                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>

    </motion.div>
  )
}

export default OrdersTable