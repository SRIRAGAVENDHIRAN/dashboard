import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const ordersOnDailyBasis = [
    {date:"04/11", orders:35},
    {date:"04/12", orders:20},
    {date:"04/13", orders:30},
    {date:"04/14", orders:45},
    {date:"04/15", orders:55},
    {date:"04/16", orders:40},
];


const DailyOrders = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-yellow-300"
    initial={{opacity: 0,y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.2}}
    >
        <h2 className="text-lg font-medium mb-4 text-gray-100">Daily Orders</h2>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"} >
                <LineChart data={ordersOnDailyBasis}>
                    <CartesianGrid strokeDasharray='3 3' stroke="#4B5563"/>
                    <XAxis dataKey = {"day"}/>
                    <YAxis stroke="#9ca3af"/>
                    <Tooltip contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColorL: "#4B5563"
                    }} itemStyle={{color:"E5E7EB"}}/>
                        <Line 
                        type={'monotone'}
                        dataKey='orders'
                        stroke="#e3ab0b"
                        strokeWidth={3}
                        dot={{ fill:"#916f0b", strokeWidth:2, r:6}}
                        activeDot={{r:8, strokeWidth: 2}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default DailyOrders