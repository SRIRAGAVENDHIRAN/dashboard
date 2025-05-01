import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useState } from "react"

const revenueData = [
    {month: "Jan", revenue: 5000, target: 3000},
    {month: "Fen", revenue: 2000, target: 4000},
    {month: "Mar", revenue: 4000, target: 3000},
    {month: "Apr", revenue: 7600, target: 5000},
    {month: "May", revenue: 6600, target: 4500},
    {month: "Jun", revenue: 4600, target: 5000},
]

const Revenue = () => {
    const [ selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
        <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-purple-400"
            initial={{opacity: 0,y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay: 0.2}}
        >
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold text-red-100">Revenue / Target</h2>
                <div className="w-full overflow-x-auto">
                <select className="bg-purple-900 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600
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
                    <AreaChart data = {revenueData}>
                        <CartesianGrid strokeDasharray='3 3' stroke="#4B5563"/>
                        <XAxis dataKey = {"name"}/>
                        <YAxis stroke="#9ca3af"/>
                        <Tooltip contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColorL: "#4B5563"
                        }} itemStyle={{color:"E5E7EB"}}/>
                        <Area type='monotone' dataKey='revenue' stroke="#1cd6c4" fill="#1cd6c4" fillOpacity={0.6}/>
                        <Area type='monotone' dataKey='target' stroke="#1cd671" fill="#1cd671" fillOpacity={0.6}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
  )
}

export default Revenue