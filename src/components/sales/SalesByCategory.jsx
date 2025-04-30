import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { motion } from 'framer-motion'

const categorySales = [
    {name: "Electronics", value: 500},
    {name: "Sports", value: 465},
    {name: "Books", value: 300},
    {name: "Home Appliances", value: 700},
    {name: "Others", value: 200},
]

const COLORS = ["#00ffd3", "#bc5700", "#EC4899", "#0057d3", "#bc57d3"];


const SalesByCategory = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-pink-400'
        initial={{opacity: 0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.3}}>
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Category of Sales</h2>
            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                        <Pie data={categorySales}
                        cx={"50%"}
                        cy={"50%"}
                        labelLine={false}
                        outerRadius={80}
                        fill='#8884d8'
                        dataKey='value'
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {categorySales.map((entry, index) =>(
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

export default SalesByCategory