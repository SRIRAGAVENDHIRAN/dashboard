import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import { CreditCard, IndianRupee, ShoppingCart, TrendingUp } from 'lucide-react'
import SalesOverviewChart from '../components/sales/SalesOverviewChart'
import StatCard from '../components/common/StatCard'
import DailySales from '../components/sales/DailySales'
import SalesByCategory from '../components/sales/SalesByCategory'

const salesStats = {
    totalRevenue: "₹ 1,355,123",
    avgOrderValue: "₹ 82.91",
    conversionRate: "3.89%",
    salesGrowth: "10.2%"
}

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title="Sales" titleClass="text-pink-400"/>
        <main className='max-w-7xl mx-auto py-5 px-4 lg:px-8'>
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{duration: 1}}
            >
            <div className="border border-pink-400">
            <StatCard 
                name="Total Revenue Generated"
                icon={IndianRupee}
                value={salesStats.totalRevenue}
                color='#6366F1'
            />
            </div>
            <div className="border border-pink-400">
            <StatCard 
                name="Avg Ord Val"
                icon={ShoppingCart}
                value={salesStats.avgOrderValue}
                color='#10B981'
            />
            </div>
            <div className="border border-pink-400">
            <StatCard 
                name="Conversion Rate"
                icon={TrendingUp}
                value={salesStats.conversionRate.toLocaleString()}
                color='#f59e08'
            />
            </div>
            <div className="border border-pink-400">
            <StatCard 
                name="Sales Growth"
                icon={CreditCard}
                value={salesStats.salesGrowth}
                color='#ef4444'
            />
            </div>  
            </motion.div>
            <SalesOverviewChart/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mb-8 mt-8">
                <SalesByCategory/>
                <DailySales/>
            </div>
        </main>
    </div>
  )
}

export default SalesPage