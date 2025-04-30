import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import UsersTable from '../components/users/UsersTable'
import UserGrowthChart from '../components/users/UserGrowthChart'
import UserActivityHeatMap from '../components/users/UserActivityHeatMap'
import UserDemographicCharts from '../components/users/UserDemographicCharts'

const userStats = {
    totalUsers: 1200501,
    newUsersToday: 195,
    activeUsers: 68956,
    churnRate: "1.95%"
}

const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Users" titleClass="text-pink-600"/>
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
    <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
    initial={{opacity:0, y:40}}
    animate={{opacity:1, y:0}}
    transition={{duration: 1}}
    >

        <div className="border border-pink-700">
            <StatCard 
                name="Total Users"
                icon={UsersIcon}
                value={userStats.totalUsers.toLocaleString()}
                color='#6366F1'
            />
        </div>
        <div className="border border-pink-700">
            <StatCard 
                name="New Users Today"
                icon={UserPlus}
                value={userStats.newUsersToday}
                color='#10B981'
            />
        </div>
        <div className="border border-pink-700">
            <StatCard 
                name="Active Users"
                icon={UserCheck}
                value={userStats.activeUsers.toLocaleString()}
                color='#f59e08'
            />
        </div>
        <div className="border border-pink-700">
            <StatCard 
                name="Churn Rate"
                icon={UserX}
                value={userStats.churnRate}
                color='#ef4444'
            />
        </div>
    </motion.div>
    <UsersTable/>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <UserGrowthChart/>
        <UserActivityHeatMap/>
        <UserDemographicCharts/>
    </div>
    </main>
    </div>
  )
}

export default UsersPage