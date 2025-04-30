import React from 'react'
import Header from '../components/common/Header'
import OverviewCards from '../components/analytics/OverviewCards'
import Revenue from '../components/analytics/Revenue'
import CustomerSegment from '../components/analytics/CustomerSegment'
import UserAnalysis from '../components/analytics/UserAnalysis'
import ProductPerforma from '../components/analytics/ProductPerforma'
import WebsitePerforma from '../components/analytics/WebsitePerforma'
import Insights from '../components/analytics/Insights'

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title="Analytics" titleClass={"text-purple-400"}/>
        <main className='max-w-7xl mx-auto py-5 px-4 lg:px-8'>
        <OverviewCards/>
        <Revenue/>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-7">
            <WebsitePerforma/>
            <ProductPerforma/>
            <UserAnalysis/>
            <CustomerSegment/>
        </div>
        <Insights/>
        </main> 
    </div>
  )
}

export default AnalyticsPage