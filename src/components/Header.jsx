import React from 'react'

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white/10 backdrop-blur-md">
            <div className="text-3xl font-bold text-white">
                <span className="text-purple-400">Modern</span>App
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
                <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">Features</a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">About</a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md lg:hidden">
                    <div className="px-4 py-2 space-y-2">
                        <a href="#" className="block text-white hover:text-purple-400 transition-colors">Home</a>
                        <a href="#" className="block text-white hover:text-purple-400 transition-colors">Features</a>
                        <a href="#" className="block text-white hover:text-purple-400 transition-colors">About</a>
                        <a href="#" className="block text-white hover:text-purple-400 transition-colors">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Header