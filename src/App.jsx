import React from "react";
import SimpleButton from "@/components/SimpleButton.jsx";

export default function App() {
 return (
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
 <div className="container px-4 sm:px-6 lg:px-8">
 <div className="max-w-7xl mx-auto py-16 sm:py-24">
 <SimpleButton />
 </div>
 </div>
 </div>
 );
}
