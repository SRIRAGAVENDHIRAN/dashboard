import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useState } from "react"

const weeklySalesData = [
    {week: "Week1", sales: 300},
    {week: "Week2", sales: 500},
    {week: "Week3", sales: 400},
    {week: "Week4", sales: 560},
]

const SalesOverviewChart = () => {
    const [ selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
        <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-pink-400"
            initial={{opacity: 0,y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay: 0.2}}
        >
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
                <div className="w-full overflow-x-auto">
                <select className="bg-pink-800 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400 
                " value = {selectedTimeRange} onChange={(e) => setSelectedTimeRange(e.target.value)}>
                    <option value="">This Month</option>
                    <option value="">This Week</option>
                    <option value="">Past Two Month</option>
                    <option value="">Past Six Month</option>
                </select>
                </div>
            </div>

            <div className="w-full h-80">
                <ResponsiveContainer>
                    <AreaChart data = {weeklySalesData}>
                        <CartesianGrid strokeDasharray='3 3' stroke="#4B5563"/>
                        <XAxis dataKey = {"name"}/>
                        <YAxis stroke="#9ca3af"/>
                        <Tooltip contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColorL: "#4B5563"
                        }} itemStyle={{color:"E5E7EB"}}/>
                        <Area type='monotone' dataKey='sales' stroke="#cf4bf8" fill="#a861be" fillOpacity={0.5}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
  )
}

export default SalesOverviewChart