import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#6366F1", "#EC4899", "#10B981", "#F59E0B"];

const productData = [
  {name: "Electronics", sales: 400, revenue: 5000, profit: 3000},
  {name: "House", sales: 450, revenue: 2000, profit: 4000},
  {name: "Fitness", sales: 480, revenue: 4000, profit: 3000},
  {name: "Accessories", sales: 500, revenue: 7600, profit: 5000},
  {name: "Cosmetics", sales: 320, revenue: 6600, profit: 4500},
]

const ProductPerforma = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6  border border-purple-400"
        initial={{opacity: 0,y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.4}}
        >
        <h2 className="text-lg font-medium text-gray-100 mb-4">Products Performa</h2>
        <div className="h-80">
            <ResponsiveContainer>
                <BarChart data={productData}>
                    <CartesianGrid strokeDasharray={'2 2'} stroke="#4B5563"/>
                    <XAxis dataKey='name' stroke="#9CA3AF" tick={{fontSize: 12}}/>
                    <YAxis stroke="#9CA3AF" tick={{fontSize: 12}}/>
                    <Tooltip contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4B5563"
                    }} itemStyle={{color:"E5E7EB"}}/>
                    <Legend/>
                    <Bar dataKey='sales' fill="#36ed0a"/>
                    <Bar dataKey='revenue' fill="#a02d91"/>
                    <Bar dataKey='profit' fill="#95fdf5"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
        </motion.div>
  )
}

export default ProductPerforma