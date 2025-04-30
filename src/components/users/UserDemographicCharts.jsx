import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const COLORS = ["#ae3a52", "#c9ca5d", "#5dca67", "#b05dca", "#e96969"]

const UserDemographicData = [
    {name: "18-24", value: 20},
    {name: "25-34", value: 35},
    {name: "35-44", value: 25},
    {name: "45-54", value: 12},
    {name: "55+", value: 8},
]

const UserDemographicCharts = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounde-xl p-6 border border-pink-700 rounded-xl lg:col-span-2'
    initial={{opacity: 0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.4}}>
        <h2 className="text-xl font-semibold text-gray-100 mb-4">User Demographics</h2>
        <div style = {{width: "100%", height: 300}}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={UserDemographicData}
                            cx={"50%"}
                            cy={"50%"}
                            labelLine={false}
                            outerRadius={100}
                            fill='#8884d8'
                            dataKey='value'
                            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {UserDemographicData.map((entry, index) =>(
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

export default UserDemographicCharts