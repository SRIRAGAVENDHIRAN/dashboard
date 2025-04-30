import { motion } from "framer-motion"

const SettingsPageContainer = ({icon: Icon, title, children}) => {

  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-cyan-300 mb-8"
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.6}}>
        <div className="flex items-center mb-4">
            <Icon className="text-emerald-400 mr-4" size="24"/>
            <h2 className="text-xl font-semibold text-gray-100">
                {title}
            </h2>
        </div>
        {children}
    </motion.div>
  )
}

export default SettingsPageContainer