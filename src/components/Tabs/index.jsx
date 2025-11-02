/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
  containerClassName,
  activeTabClassName,
  tabClassName,
}) => {
  return (
    <>
      {/* Tampilan Desktop*/}
      <div
        className={cn(
          "hidden md:flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName,
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="clicked_button_himti"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 rounded-full",
                  activeTabClassName,
                )}
              />
            )}
            <span className="relative block text-gray-800 whitespace-nowrap">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Tampilan Mobile */}
      <div className="w-full md:hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex items-center justify-start overflow-x-auto pb-2 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative px-4 py-2 rounded-full flex-shrink-0",
                tabClassName,
                activeTab.value === tab.value
                  ? "text-blue-600 font-bold"
                  : "text-gray-500",
              )}
            >
              {activeTab.value === tab.value && (
                <motion.div
                  layoutId="clicked_button_himti_mobile"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 bg-gray-200 rounded-full",
                    activeTabClassName,
                  )}
                />
              )}
              <span className="relative block whitespace-nowrap">
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
