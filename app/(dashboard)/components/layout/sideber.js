'use client'
import { RiDashboardLine, RiCalendarLine, RiUserLine, RiFileList3Line, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar({ isExpanded, toggleSidebar }) {
    const menuItems = [
        
        { icon: () => <Image width={20} height={20} src="/profile.webp" alt="Profile" className="h-5 w-5 rounded-full" />, label: 'Admin', href: '/profile' },
        { icon: RiDashboardLine, label: 'Dashboard', href: '/' },
        { icon: RiCalendarLine, label: 'services', href: '/admin/sevices' },
        { icon: RiUserLine, label: 'product', href: '/admin/product' },
        { icon: RiFileList3Line, label: 'Reports', href: '/reports' },
    ];

    return (
        <aside 
        className={`fixed left-0 top-0 z-40 flex h-screen flex-col bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 ${isExpanded ? 'w-56' : 'w-16'}`}
        >
            {/* Logo */}
            <div className="flex h-16 items-center justify-between px-4">
                {isExpanded ? (
                    <span className="text-xl font-bold text-white">Docosen</span>
                ) : (
                    <span className="mx-auto text-xl font-bold text-white">D</span>
                )}
            </div>

            {/* Collapse Button */}
            <button
                onClick={toggleSidebar}
                className="absolute right-0 top-[9%] transform -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full text-gray-300 bg-white"
                style={{ transform: 'translate(50%, -50%)' }} 
            >
                {isExpanded ? <RiArrowLeftSLine className="h-5 w-5" /> : <RiArrowRightSLine className="h-5 w-5" />}
            </button>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-1 p-3">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="flex h-10 items-center rounded-lg px-3 text-gray-300 hover:bg-gray-800"
                    >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {isExpanded && (
                            <span className="ml-3 truncate">{item.label}</span>
                        )}
                    </Link>
                    
                ))}
            </nav>
        </aside>
    );
}