/* eslint-disable react/prop-types */
import { cn } from "../../../../lib/utils";

export const DraggableCard = ({ className, item }) => {
  return (
    <div
      className={cn(
        "h-96 w-80 rounded-2xl bg-white dark:bg-neutral-900 p-4 shadow-2xl",
        className,
      )}
    >
      <img
        src={item.image}
        alt={item.title}
        className="pointer-events-none relative z-10 h-60 w-full rounded-lg object-cover"
      />
      <h3 className="mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300">
        {item.title}
      </h3>
      <p className="text-center text-sm italic text-neutral-500">
        &quot;Bersama kita belajar, bersama kita berkembang.&ldquo;
      </p>
    </div>
  );
};
