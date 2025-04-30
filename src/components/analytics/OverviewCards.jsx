import { ArrowDown, ArrowRight, DollarSignIcon, Eye, ShoppingBag, Users } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const overviewCardData = [
    {name:"Users", value: "48,000", change: "15.40", icon: Users},
    {name:"Orders", value: "38,000", change: "-3.01", icon: ShoppingBag},
    {name:"Revenue Generated", value: "9.765", change: "121.15", icon: DollarSignIcon},
    {name:"Views", value: "2,00,000", change: "1.99", icon: Eye},
]

const OverviewCards = () => {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-7'>
        {overviewCardData.map((item, index) => (
            <motion.div key={item.name} 
            className="bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
            rounded-xl p-6 border border-purple-400"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: index * 0.2}}>
                <div className="flex items-center justify-between">
                    <div className="">
                        <h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
                        <p className="mt-1 text-xl font-semibold text-fuchsia-300">{item.value}</p>
                    </div>

                    <div className={`p-3 rounded-full ${item.change >= 0 ? "bg-yellow-100 bg-opacity-30": "bg-red-500 bg-opacity-30"}`}>
                        <item.icon className={`size-5 ${item.change >= 0 ? "text-green-700" : "text-amber-900"}`}
                        />
                    </div>
                </div>
                <div className={`mt-4 flex items-center ${item.change >= 0 ? "text-green-700":"text-red-400"}`}>
                        {item.change >= 0 ? <ArrowRight size="20"/> : <ArrowDown size="20"/>}
                        <span className="ml-1 text-sm font-medium">{Math.abs(item.change)}%</span>
                        <span className="ml-2 text-sm text-cyan-600">/ Last period</span>
                </div>

            </motion.div>
        ))}
    </div>
  )
}

export default OverviewCards