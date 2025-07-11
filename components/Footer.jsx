import React from 'react'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Ecliptica</h3>
          <p className="text-sm text-gray-400">
            Elevating brands with tech-first design, automation, and smart solutions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Case Studies</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-300">info@ecliptica.io</p>
          <p className="text-sm text-gray-300">+91 98765 43210</p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-medium mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2">

            <a href="https://www.instagram.com/chiragrane04/"><Instagram className="w-5 h-5 text-gray-400 hover:text-white" /></a>
            <a href="https://github.com/chiragRane-Projects"><Mail className="w-5 h-5 text-gray-400 hover:text-white" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Ecliptica. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
