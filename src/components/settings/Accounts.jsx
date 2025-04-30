import { useState } from 'react'
import SettingsPageContainer from './SettingsPageContainer'
import { HelpCircle } from 'lucide-react'
import { div } from 'framer-motion/client'

const Accounts = () => {
    const [accountsSigned, setAccountsSigned] = useState([
        {
            id: 1,
            name: "Google",
            connected: true,
            icon: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
        },
        {
            id: 2,
            name: "Github",
            connected: true,
            icon: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
        },
        {
            id: 3,
            name: "Flickr",
            connected: false,
            icon: "https://img.icons8.com/?size=100&id=20896&format=png&color=000000"
        },
    ])
  return (
    <SettingsPageContainer icon={HelpCircle} title={"Accounts Signed In"}>
        {accountsSigned.map((account)=>(
            <div key={account.id} className='flex items-center justify-between py-3'>
                <div className="flex gap-1">
                    <img src={account.icon} alt="icon" className='size-6 rounded-full object-cover mr-2' />
                    <span className='text-gray-100'>{account.name}</span>
                </div>
                <button className={`px-3 py-3 rounded 
                    ${account.connected ? "bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-fuchsia-600":
                    "bg-gray-500 hover:bg-gray-700"} transition duration-200`}
                    onClick={() => {
                        setAccountsSigned(
                            accountsSigned.map((acc) => {
                                if (acc.id === account.id) {
                                    return {
                                        ...acc, connected: !acc.connected
                                    }
                                }
                                return acc;
                            })
                        )
                    }}>
                    {account.connected ? "Connected" : "Connect"}
                </button>
            </div>
        ))}
        <button className="bg-gray-600 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded transition duration-600 w-full sm:w-auto hover:scale-95 hover:bg-gradient-to-r from-cyan-400 to-fuchsia-500 mt-3">
            + Add Accounts
        </button>
    </SettingsPageContainer>
  )
}

export default Accounts