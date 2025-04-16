import React, { useState } from 'react'
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
  
  // Filter produk berdasarkan kata kunci pencarian
  const filteredProducts = exportProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <header className="w-full">
        <Navbar />
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
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            />
            <div className="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Results Count */}
        {searchTerm && (
          <div className="mb-4 text-center">
            <p className="text-gray-600">
              {filteredProducts.length} produk ditemukan untuk "{searchTerm}"
            </p>
          </div>
        )}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500 mb-4">Tidak ada produk yang ditemukan</p>
            <p className="text-gray-400">Coba kata kunci pencarian lain</p>
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
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Export