import React, { useState, useEffect } from 'react'
import products from '../utils/product'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/export/Navbar'
import { nanoid } from 'nanoid'

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Page for displaying export products.
 *
 * This page will display a list of export products. It will also include a search bar
 * to filter the products by name or description. If no products are found, it will
 * display a message indicating that no products were found.
 *
 * @return {JSX.Element} The Export page component.
/*******  006d126d-b857-4eaf-a428-a4f4cf3f48e9  *******/
function Export() {
  const exportProducts = products.export || []
  const [searchTerm, setSearchTerm] = useState('')
  
  // State untuk menyimpan tema
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })
  
  // Effect untuk menerapkan tema ke dokumen
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }
  }, [theme])
  
  // Toggle tema function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  // Filter produk berdasarkan kata kunci pencarian
  const filteredProducts = exportProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <header className="w-full">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {/* Banner */}
        <div
          className="bg-[url('/src/assets/images/export/banner.png')] 
          w-full
          h-[300px]
          bg-cover 
          bg-center 
          relative"
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Export 
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Theme Toggle Button (Alternative location) */}
        <div className="flex justify-end mb-4">
          <button 
            onClick={toggleTheme} 
            className={`rounded-full p-2 ${
              theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {theme === 'light' ? (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'dark' 
                  ? 'border-gray-600 bg-gray-800 text-white focus:ring-blue-500' 
                  : 'border-gray-300 focus:ring-primary'
              } focus:outline-none focus:ring-2 focus:border-transparent shadow-sm`}
            />
            <div className={`absolute right-3 top-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-400'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Results Count */}
        {searchTerm && (
          <div className="mb-4 text-center">
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {filteredProducts.length} produk ditemukan untuk "{searchTerm}"
            </p>
          </div>
        )}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} mb-4`}>
              Tidak ada produk yang ditemukan
            </p>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}>
              Coba kata kunci pencarian lain
            </p>
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
              theme={theme}  // Pass theme to ProductCard if it needs theme-specific styling
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Export