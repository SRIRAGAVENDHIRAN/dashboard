import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userGrowthData = [
    {month:"Jan", users:1200},
    {month:"Feb", users:700},
    {month:"Mar", users:1200},
    {month:"Apr", users:1700},
    {month:"May", users:2500},
    {month:"June", users:2750},
];


const UserGrowthChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-pink-700"
    initial={{opacity: 0,y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.2}}
    >
        <h2 className="text-lg font-medium mb-4 text-gray-100">User Growth</h2>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"} >
                <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray='3 3' stroke="#4B5563"/>
                    <XAxis dataKey = {"month"}/>
                    <YAxis stroke="#9ca3af"/>
                    <Tooltip contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColorL: "#4B5563"
                    }} itemStyle={{color:"E5E7EB"}}/>
                        <Line 
                        type={'monotone'}
                        dataKey='users'
                        stroke="#f817b0"
                        strokeWidth={3}
                        dot={{ fill:"#a30571", strokeWidth:2, r:6}}
                        activeDot={{r:8, strokeWidth: 2}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default UserGrowthChart