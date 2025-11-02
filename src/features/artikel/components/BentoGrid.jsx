// /* eslint-disable react/prop-types */
// import { cn } from "../../../lib/utils";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export const BentoGrid = ({ className, children }) => {
//   return (
//     <div
//       className={cn(
//         "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// const BentoGridHeader = ({ src }) => (
//   <img
//     src={src}
//     alt="header-img"
//     className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-thick-neutral-300 border border-transparent object-cover"
//   />
// );

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   id,
// }) => {
//   return (
//     <div
//       className={cn(
//         "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl",
//         className,
//       )}
//     >
//       <BentoGridHeader src={header} />
//       <div className="flex flex-col justify-between flex-1">
//         <div>
//           <div className="text-lg font-sans font-bold text-neutral-600 mb-2">
//             {title}
//           </div>
//           <div className="font-sans text-md font-normal text-neutral-600">
//             {description}
//           </div>
//         </div>
//         <Link
//           to={`/artikel/${id}`}
//           className="flex items-center gap-2 text-md font-semibold text-yellow-500 hover:underline mt-4 self-start"
//         >
//           <span className="align-middle">Baca Selengkapnya</span>
//           <ArrowRight size={17} className="relative top-[2px]" />
//         </Link>
//       </div>
//     </div>
//   );
// };
