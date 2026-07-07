import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive ? "text-[#23195f] font-semibold" : "text-gray-700 hover:text-[#23195f]";

    return (
        <>
            {/* Top promo bar */}
            <div className="w-full bg-[#1B1967] text-white text-sm">
                <div className="mx-auto max-w-7xl px-4 py-1 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="t">Free delivery within Egbeda on orders over ₦15,000</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs opacity-90">
                        <span className="flex items-center gap-2"><i class="fa-solid fa-phone"></i>+234 803 359 7959</span>
                        <span className="hidden sm:inline"><i class="fa-brands fa-instagram"></i>@nuguespharmacy</span>
                    </div>
                </div>
            </div>

            <header className="w-full bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Left: logo */}
                        <div className="flex items-center gap-4">
                            <Link to="/home" className="flex items-center gap-3">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#23195f] text-white font-semibold">N</div>
                                <div className="hidden sm:block">
                                    <div className="text-lg font-semibold text-[#23195f]">Nuges</div>
                                    <div className="text-xs text-gray-400">PHARMACEUTICALS</div>
                                </div>
                            </Link>
                        </div>

                        {/* Center: nav links (desktop) */}
                        <nav className="hidden md:flex items-center space-x-6">
                            <NavLink to="/home" className={linkClass}>Home</NavLink>
                            <NavLink to="/Shop" className={linkClass}>Shop</NavLink>
                            <NavLink to="/Service" className={linkClass}>Services</NavLink>
                            <NavLink to="/About" className={linkClass}>About</NavLink>
                            <NavLink to="/Contact" className={linkClass}>Contact</NavLink>
                        </nav>

                        {/* Right: search + actions */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <label className="relative block">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><i class="fa-brands fa-sistrix"></i></span>
                                    <input
                                        className="w-64 rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm placeholder-gray-400 focus:outline-none"
                                        placeholder="Search medicines..."
                                        aria-label="Search"
                                    />
                                </label>
                            </div>

                            <Link to="/signin" className="inline-flex items-center gap-2 rounded-full bg-[#23195f] px-4 py-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z" />
                                </svg>
                                <span className="hidden sm:inline">Sign in</span>
                            </Link>

                            <button aria-label="favorites" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                <i class="fa-regular fa-heart"></i>
                            </button>

                            <button aria-label="cart" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                               <i class="fa-solid fa-cart-shopping"></i>
                            </button>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setOpen((s) => !s)}
                                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
                                aria-label="Open menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden border-t">
                        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col space-y-2">
                            <NavLink to="/home" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
                            <NavLink to="/Shop" className={linkClass} onClick={() => setOpen(false)}>Shop</NavLink>
                            <NavLink to="/Service" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
                            <NavLink to="/About" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
                            <NavLink to="/Contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

export default Navbar;