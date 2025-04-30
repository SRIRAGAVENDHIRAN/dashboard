import React from 'react'
import SettingsPageContainer from './SettingsPageContainer'
import { User } from 'lucide-react'

const Profile = () => {
  return (
    <SettingsPageContainer icon={User} title={"Profile"}>
        <div className="flex flex-col sm:flex-row items-center mb-6">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile"
             className="rounded-br-3xl rounded-tr-3xl w-20 h-20 object-cover mr-4" />
             <div>
                <h3 className="text-lg font-semibold text-gray-100">Ragav</h3>
                <p className="text-gray-400">rage@ragaven.com</p>
             </div>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto hover:scale-95">Edit Profile</button>

    </SettingsPageContainer>
  )
}

export default Profile