import {motion} from 'framer-motion'
import { Edit, Search, Trash2 } from 'lucide-react'
import { useState } from 'react'

const productsData = [
    {id: 1, name: "Laptops", category: "Electronics", price: 599.99, stock: 29, sales: 250},
    {id: 2, name: "Smart TV", category: "Electronics", price: 399.99, stock: 60, sales: 150},
    {id: 3, name: "Row Machine", category: "Fitness", price: 259.99, stock: 76, sales: 50},
    {id: 4, name: "Mixer", category: "Home", price: 9.99, stock: 130, sales: 750},
    {id: 5, name: "Face Wash", category: "Cosmetics", price: 5.99, stock: 250, sales: 1500},
]

const ProductTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilterProducts] = useState(productsData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filteration = productsData.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term));
        setFilterProducts(filteration);
    }
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg border p-6 border-lime-400 mb-8"
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.2}}>
        
        <div className="flex justify-between items-center mb-6">
            <h2 className='text-xl font-semibold text-gray-100'>Products List</h2>
            <div className="relative overflow-x-auto">
                <input type="text" placeholder="Search Products here..."
                className='bg-lime-800 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none
                focus:ring-2 focus:ring-lime-500' 
                onChange={handleSearch}
                value={searchTerm}/>
                <Search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Name
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Category
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Price
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Stock
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Sales
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {filteredProducts.map(product => (
                        <motion.tr key={product.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.3}}>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                                <img src="https://plus.unsplash.com/premium_photo-1683887064106-531532ecdf20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" alt="image" className="size-10 rounded-full" />
                                {product.name}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm  text-gray-100'>
                                {product.category}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                                ₹ {product.price.toFixed(2)}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                                {product.stock}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                                {product.sales}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                                <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                                    <Edit size={18}/>
                                </button>
                                <button className='text-red-400 hover:text-red-300'>
                                    <Trash2 size={18}/>
                                </button>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>

    </motion.div>
  )
}

export default ProductTable