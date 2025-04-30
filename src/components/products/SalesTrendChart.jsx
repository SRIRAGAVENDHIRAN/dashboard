import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const salesData = [
    {name:"Jan", sales:5000},
    {name:"Feb", sales:5500},
    {name:"Mar", sales:3900},
    {name:"Apr", sales:6200},
    {name:"May", sales:6900},
    {name:"June", sales:7500},
];

const SalesTrendChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-lime-400"
    initial={{opacity: 0,y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.2}}
    >
        <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"} >
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray='3 3' stroke="#4B5563"/>
                    <XAxis dataKey = {"name"}/>
                    <YAxis stroke="#9ca3af"/>
                    <Tooltip contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColorL: "#4B5563"
                    }} itemStyle={{color:"E5E7EB"}}/>
                        <Line 
                        type={'bump'}
                        dataKey='sales'
                        stroke="#5af171"
                        strokeWidth={3}
                        dot={{ fill:"#09a621", strokeWidth:2, r:6}}
                        activeDot={{r:8, strokeWidth: 2}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesTrendChart