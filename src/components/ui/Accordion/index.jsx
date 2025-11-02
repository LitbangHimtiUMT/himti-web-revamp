/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";

// Konteks untuk berbagi state antara komponen Accordion
const AccordionContext = React.createContext();

// Komponen Wrapper Utama
export const Accordion = ({ children, type = "single", collapsible = true, className }) => {
  const [openValue, setOpenValue] = useState(null);

  const toggleItem = (value) => {
    if (collapsible && openValue === value) {
      setOpenValue(null);
    } else {
      setOpenValue(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ openValue, toggleItem, type }}>
      <div className={cn("w-full", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// Komponen untuk setiap item
export const AccordionItem = ({ children, value, className }) => {
  return (
    <div className={cn("border-b", className)}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { value })
      )}
    </div>
  );
};

// Komponen Trigger (Judul yang bisa diklik)
export const AccordionTrigger = ({ children, value, className }) => {
  const { openValue, toggleItem } = React.useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline",
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
};

// Komponen Content (Konten yang bisa expand/collapse)
export const AccordionContent = ({ children, value, className }) => {
  const { openValue } = React.useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn("overflow-hidden", className)}
        >
          <div className="pb-4 pt-0">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};