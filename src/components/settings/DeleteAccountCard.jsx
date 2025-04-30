import { motion } from "framer-motion"
import { Trash2 } from "lucide-react"

const DeleteAccountCard = () => {
  return (
    <motion.div className = 'bg-red-900  backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-500 mb-8'
    initial={{opacity: 0, y:20}}
    animate={{opacity: 1, y:0}}
    transition={{duration: 0.5, delay: 0.4}}
    >
        <div className="flex items-center mb-4">
            <Trash2 className="text-red-400 mr-3" size={20}/>
            <h2 className="text-xl font-semibold text-gray-100">Danger Zone</h2>
        </div>
        <p className="text-gray-100 mb-4">If you don't want the account anymore. Trash it Here Below...</p>
        <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300">Oops..Delete Account</button>
    </motion.div>
  )
}

export default DeleteAccountCard