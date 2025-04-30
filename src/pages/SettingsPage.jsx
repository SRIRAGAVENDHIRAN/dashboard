import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/settings/Profile'
import Notification from '../components/settings/Notification'
import Security from '../components/settings/Security'
import Accounts from '../components/settings/Accounts'
import DeleteAccountCard from '../components/settings/DeleteAccountCard'

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-800'>
        <Header title = 'Settings' titleClass={"text-cyan-400"}/>
        <main className='max-w-4xl mx-auto py-5 px-4 lg:px-8'>
            <Profile/>
            <Notification/>
            <Security/>
            <Accounts/>
            <DeleteAccountCard/>
        </main>
    </div>
    
  )
}

export default SettingsPage