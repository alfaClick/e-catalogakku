import React from 'react'

function Footer() {
  return (
    <footer className="bg-[url('https://www.anekakomkar.co.id/assets/img/footerbg.png')] bg-cover bg-center bg-no-repeat">
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <nav className="space-y-4">
          <img
            src="https://www.anekakomkar.co.id/assets/img/logo_white.png"
            alt="Company Logo"
            className="mb-4 max-w-[200px]"
          />
         <h6 className="footer-title mb-4 text-white">Head Office</h6>
  <address className="text-white not-italic">
  Jl. Gajah Tunggal No.16, Jatiuwung Tangerang, Banten - Indonesia
  15133
</address>
        </nav>

        <nav className="space-y-4 text-white opacity-100 text-lg">
          <h6 className="footer-title">Products</h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover text-white">Industry</a>
            </li>
            <li>
              <a className="link link-hover text-white">Four Wheels</a>
            </li>
            <li>
              <a className="link link-hover text-white">Two Wheels</a>
            </li>
            <li>
              <a className="link link-hover text-white">
                Truck And Heavy Equipment
              </a>
            </li>
            <li>
              <a className="link link-hover text-white">Export</a>
            </li>
          </ul>
        </nav>

        <nav className="space-y-4">
          <h6 className="footer-title text-white opacity-100 text-lg">
            Location
          </h6>
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31731.92935993382!2d106.55299830280293!3d-6.198744552482734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff1d5c483363%3A0x21f6443ad30a5dd0!2sPT%20ANEKA%20KOMKAR%20UTAMA!5e0!3m2!1sen!2sid!4v1743580734807!5m2!1sen!2sid"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto p-4 text-center text-white">
          <p>Copyright © 2025 Aneka Komkar Utama</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
