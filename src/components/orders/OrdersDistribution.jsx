import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const COLORS = ["#ff4000", "#ffff00", "#00ff80", "#ff00ff", "#ff0000"]

const orderDistributionData = [
    {name: "Delivered", value: 20},
    {name: "Processing", value: 35},
    {name: "Shipped", value: 25},
    {name: "Pending", value: 12},
]

const OrdersDistribution = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounde-xl p-6 rounded-xl border border-yellow-300'
    initial={{opacity: 0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.4}}>
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Order Demographics</h2>
        <div style = {{width: "100%", height: 300}}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={orderDistributionData}
                            cx={"50%"}
                            cy={"50%"}
                            labelLine={false}
                            outerRadius={100}
                            fill='#8884d8'
                            dataKey='value'
                            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {orderDistributionData.map((entry, index) =>(
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
        
                            </Pie>
                            <Tooltip
                             contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColorL: "#4B5563"
                            }} itemStyle={{color:"E5E7EB"}}/>
                            <Legend/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
    </motion.div>
  )
}

export default OrdersDistribution