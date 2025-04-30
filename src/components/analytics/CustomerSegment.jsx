import { motion } from "framer-motion"
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip } from "recharts"

const CustomerSegmentData = [
  {subject: "Frequent", A: 80, B: 95, full: 120},
  {subject: "Satisfied", A: 95, B: 75, full: 120},
  {subject: "Monetary", A: 85, B: 95, full: 120},
  {subject: "Recency", A: 80, B: 65, full: 120},
  {subject: "Spend", A: 75, B: 100, full: 120},
]

const CustomerSegment = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounde-xl p-6 border border-purple-400 rounded-xl'
    initial={{opacity: 0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.9}}>
      <h2 className="text-xl font-semibold text-gray-100 mb-4">User Segmentations</h2>
        <div style = {{width: "100%", height: 300}}>
          <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius='80%' data={CustomerSegmentData}>
                  <PolarGrid stroke="#334151"/>
                  <PolarAngleAxis dataKey='subject' stroke="#8ca5af"/>
                  <PolarRadiusAxis angle={30} domain={[0,120]} stroke="#8ca5af"/>
                  <Radar name="Segment A" dataKey='A' stroke="#58d359" fill="#58d359" fillOpacity={1.0} />
                  <Radar name="Segment B" dataKey='B' stroke="#10facb" fill="#10facb" fillOpacity={0.6} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(31, 41, 55, 0.8)",
                      borderColor: "#4B5563"
                  }} itemStyle={{color:"#E5E7EB"}}/>
                  <Legend/>
              </RadarChart>
          </ResponsiveContainer>
      </div>

    </motion.div>
  )
}

export default CustomerSegment