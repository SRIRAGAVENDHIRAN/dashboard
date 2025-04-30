import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const interactionData = [
    {name:"Jan", views:1400},
    {name:"Feb", views:2400},
    {name:"Mar", views:3000},
    {name:"Apr", views:2500},
    {name:"May", views:3600},
    {name:"June", views:3400},
];

const WebsitePerforma = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-purple-400 mt-8"
    initial={{opacity: 0,y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.2}}
    >
        <h2 className="text-lg font-medium mb-4 text-gray-100">Website Performa</h2>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"} >
                <LineChart data={interactionData}>
                    <CartesianGrid strokeDasharray='3 3' stroke="#4B5563"/>
                    <XAxis dataKey = {"name"}/>
                    <YAxis stroke="#9ca3af"/>
                    <Tooltip contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColorL: "#4B5563"
                    }} itemStyle={{color:"E5E7EB"}}/>
                        <Line 
                        type={'bump'}
                        dataKey='views'
                        stroke="#ac58ea"
                        strokeWidth={3}
                        dot={{ fill:"#641b9a", strokeWidth:2, r:6}}
                        activeDot={{r:8, strokeWidth: 2}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default WebsitePerforma