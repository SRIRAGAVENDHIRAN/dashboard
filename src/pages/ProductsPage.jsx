import React from 'react'
import { motion } from 'framer-motion'
import { Package, AlertTriangle, TrendingUp, IndianRupee } from 'lucide-react'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import ProductTable from '../components/products/ProductTable'
import CategoryDistributionChart from '../components/products/CategoryDistributionChart'
import SalesTrendChart from '../components/products/SalesTrendChart'

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products" titleClass="text-lime-500"/>
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
    <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
    initial={{opacity:0, y:40}}
    animate={{opacity:1, y:0}}
    transition={{duration: 1}}>
      <div className="border border-lime-400">
        <StatCard
          name="Total Products" icon={Package} value={1543} color='#6366F1'
        />
      </div>
      <div className="border border-lime-400">
        <StatCard
          name="Top Selling" icon={TrendingUp} value={111} color='#8B5CF6'
        />
      </div>
      <div className="border border-lime-400">
        <StatCard
          name="Low Stock" icon={AlertTriangle} value={33} color='#EC4899'
        />
      </div>
      <div className="border border-lime-400">
        <StatCard
          name="Total Revenue" icon={IndianRupee} value={"₹ 251,000"} color='#10B981'
        />
      </div>
    </motion.div>

    <ProductTable/>

    <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
      <SalesTrendChart/>
      <CategoryDistributionChart/>
      </div>
   </main>
   </div>
  )
}

export default ProductsPage