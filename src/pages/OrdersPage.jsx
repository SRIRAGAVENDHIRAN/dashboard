import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { CheckCircle2, Clock10, IndianRupee, ShoppingBag } from 'lucide-react'
import Header from '../components/common/Header'
import DailyOrders from '../components/orders/DailyOrders'
import OrdersDistribution from '../components/orders/OrdersDistribution'
import OrdersTable from '../components/orders/OrdersTable'

const orderData = {
    totalOrders: "984",
    ordersPending: "25",
    ordersSent: "950",
    revenueGenerated: "₹ 121,092"
}

const OrdersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title="Orders" titleClass={"text-yellow-300"}/>
        <main className='max-w-7xl mx-auto py-5 px-4 lg:px-8'>
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{duration: 1}}
            >
            <div className="border border-yellow-300">
            <StatCard 
                name="Total Orders"
                icon={ShoppingBag}
                value={orderData.totalOrders}
                color='#6366F1'
            />
            </div>
            <div className="border border-yellow-300">
            <StatCard 
                name="Remaining Orders"
                icon={Clock10}
                value={orderData.ordersPending}
                color='#10B981'
            />
            </div>
            <div className="border border-yellow-300">
            <StatCard 
                name="Orders Completed"
                icon={CheckCircle2}
                value={orderData.ordersSent}
                color='#f59e08'
            />
            </div>
            <div className="border border-yellow-300">
            <StatCard 
                name="Revenue Generated"
                icon={IndianRupee}
                value={orderData.revenueGenerated}
                color='#ef4444'
            />
             </div>   
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mb-8 mt-8">
                <DailyOrders/>
                <OrdersDistribution/>
            </div>
            <OrdersTable/>
        </main>
    </div>
  )
}

export default OrdersPage