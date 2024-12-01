'use client'
import { useState } from "react";
import "../../globals.css";
import Sidebar from "../components/layout/sideber";
// import Header from "../components/layout/header";

export default function RootLayout({ children }) {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };
    return (
        <div className="min-h-screen  flex">
        <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
        {/* <Header toggleSidebar={toggleSidebar} /> */}
        <main className={` transition-all w-full duration-300 ${isSidebarExpanded ? 'ml-56' : 'ml-16'}`}>
            <div className="p-4">
                {children}
            </div>
        </main>
    </div>
    );
}
