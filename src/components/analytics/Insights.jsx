import { color, motion } from "framer-motion"
import { LucideTrendingUp, UserCircle, ShoppingCart, IndianRupee, DollarSign } from "lucide-react"

const insights = [
    {
        icon: LucideTrendingUp,
        color: "text-green-500",
        insight: "Revenue is up 25% in comparision with the last year"
    },
    {
        icon: UserCircle,
        color: "text-red-300",
        insight: "Customer interaction is increased by 20% by adding vouchers in it"
    },
    {
        icon: ShoppingCart,
        color: "text-cyan-500",
        insight: "Products like Fitness and Health are least attracted by the customers"
    },
    {
        icon: DollarSign,
        color: "text-yellow-100",
        insight: "Immediate optimizations in the price logs are essential now"
    }
]

const Insights = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-purple-400'
    initial={{opacity: 0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.4}}>
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Take a look at Insights</h2>
        <div className="space-y-4">
            {insights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
                        <item.icon className={`size-7 ${item.color}`}/>
                    </div>
                    <p className="text-lg text-gray-100">{item.insight}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Insights