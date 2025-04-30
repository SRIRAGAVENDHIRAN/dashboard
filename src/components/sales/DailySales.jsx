import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#EC4899", "#10B981", "#F59E0B"];

const dailySalesData = [
    {day: "Mon", sales: 40},
    {day: "Tue", sales: 35},
    {day: "Wed", sales: 45},
    {day: "Thu", sales: 28},
    {day: "Fri", sales: 40},
    {day: "Sat", sales: 60},
    {day: "Sun", sales: 80},
]

const DailySales = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6  border border-pink-400"
        initial={{opacity: 0,y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.4}}
        >
        <h2 className="text-lg font-medium text-gray-100 mb-4">Daliy Sales Basis</h2>
        <div className="h-80">
            <ResponsiveContainer>
                <BarChart data={dailySalesData}>
                    <CartesianGrid strokeDasharray={'2 2'} stroke="#4B5563"/>
                    <XAxis dataKey='day' stroke="#9CA3AF" tick={{fontSize: 12}}/>
                    <YAxis stroke="#9CA3AF" tick={{fontSize: 12}}/>
                    <Tooltip contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4B5563"
                    }} itemStyle={{color:"E5E7EB"}}/>
                    <Legend/>
                    <Bar dataKey={"sales"} fill="#8884d8">
                        {dailySalesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
        </motion.div>
  )
}

export default DailySales