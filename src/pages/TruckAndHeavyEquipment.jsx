import React, { useState, useEffect } from 'react'
import products from '../utils/product'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/truck-heavy-equipment/Navbar'
import { nanoid } from 'nanoid'

function TruckAndHeavyEquipment() {
  const truckProducts = products.fourWheels || []
  const [searchTerm, setSearchTerm] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  
  // Efek untuk menerapkan dark mode pada elemen HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Filter produk berdasarkan kata kunci pencarian
  const filteredProducts = truckProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <header className="w-full relative">
        <Navbar />
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        {/* Banner */}
        <div
          className="bg-[url('/src/assets/images/truck-heavy-equipment/banner.png')] 
          w-full
          h-[300px]
          bg-cover 
          bg-center 
          relative"
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Truck & Heavy Equipment
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari produk truck & heavy equipment..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-colors duration-300`}
            />
            <div className={`absolute right-3 top-3 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Results Count */}
        {searchTerm && (
          <div className="mb-4 text-center">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
              {filteredProducts.length} produk ditemukan untuk "{searchTerm}"
            </p>
          </div>
        )}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-4 transition-colors duration-300`}>Tidak ada produk yang ditemukan</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} transition-colors duration-300`}>Coba kata kunci pencarian lain</p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={nanoid()}
              description={product.description}
              image={product.image}
              title={product.name}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TruckAndHeavyEquipment