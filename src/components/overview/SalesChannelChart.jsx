import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#EC4899", "#10B981", "#F59E0B"];

const SalesChannelChart = () => {
    const [salesChannelData, setSalesChannelData] = useState([]);
    
        useEffect(() => {
            fetch('https://6811eb913ac96f7119a61a0b.mockapi.io/rage/salesChannelCategory')
            .then(response => response.json())
            .then(data => setSalesChannelData(data))
            .catch(error => console.error("Error fetching sales Channel data:", error));
        }, []);
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6  lg:col-span-2 border border-cyan-300"
        initial={{opacity: 0,y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.4}}
        >
        <h2 className="text-xl font-medium text-gray-100 mb-4">Sales Medium</h2>
        <div className="h-80">
            <ResponsiveContainer>
                <BarChart data={salesChannelData}>
                    <CartesianGrid strokeDasharray={'2 2'} stroke="#4B5563"/>
                    <XAxis dataKey='name' stroke="#9CA3AF" tick={{fontSize: 12}}/>
                    <YAxis stroke="#9CA3AF" tick={{fontSize: 12}}/>
                    <Tooltip contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4B5563"
                    }} itemStyle={{color:"E5E7EB"}}/>
                    <Legend/>
                    <Bar dataKey={"value"} fill="#8884d8">
                        {salesChannelData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
        </motion.div>
  )
}

export default SalesChannelChart