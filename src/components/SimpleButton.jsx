import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { motion } from "framer-motion";

export default function SimpleButton() {
 return (
 <motion.div
 initial={{ opacity:0, y:40 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, ease: "easeOut" }}
 className="flex items-center justify-center min-h-[300px]"
 >
 <Button className="text-lg px-8 py-4 font-semibold shadow-lg">
 Click Me
 </Button>
 </motion.div>
 );
}
