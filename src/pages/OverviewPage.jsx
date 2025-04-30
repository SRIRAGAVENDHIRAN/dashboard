import React from 'react'
import Header from '../components/common/Header'
import { BarChart, IndianRupee, ShoppingBag, Users, Zap } from 'lucide-react'
import StatCard from '../components/common/StatCard'
import { color, motion } from 'framer-motion'
import SalesOverviewChart from '../components/overview/SalesOverviewChart'
import SalesChannelChart from '../components/overview/SalesChannelChart'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Overview" titleClass="text-cyan-300"/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-'>
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1}}>
          <div className="border border-cyan-300 ">
          <StatCard
            name="Total Sales" icon={IndianRupee} value='12,000' color='#6366F1'
          />
          </div>
          <div className="border border-cyan-300">
          <StatCard
            name="New Users" icon={Users} value='120' color='#8B5CF6'
          /></div>
          <div className="border border-cyan-300">
          <StatCard
            name="Total Products" icon={ShoppingBag} value='3,000' color='#EC4899'
          /></div>
          <div className="border border-cyan-300">
          <StatCard
            name="Conversion Rate" icon={BarChart} value='15.01%' color='#10B981'
          /></div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart/>
          <CategoryDistributionChart/>
          <SalesChannelChart/>
          </div>
      </main>
      </div>
  )
}

export default OverviewPage