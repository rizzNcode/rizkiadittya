// import { motion } from "framer-motion";
// import React from "react";
// import { workData } from "../assets/assets";

// const Work = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       viewport={{ once: true }}
//       id="pengalaman"
//       className="py-20 bg-dark-100"
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-center font-bold text-3xl mb-4">
//           Pengalaman <span className="text-primary">Saya</span>
//         </h2>
//         <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
//           Pengalaman saya sejauh ini
//         </p>

//         <div className="max-w-3xl mx-auto">
//           {/* wrapper timeline */}
//           <div className="space-y-12">
//             {workData.map((data, index) => (
//               <div
//                 key={index}
//                 className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-primary cursor-pointer hover:-translate-y-2 transition-all duration-300"
//               >
//                 {/* circle marker */}
//                 <div className="absolute -left-2 top-0 w-6 h-6 rounded-full bg-primary" />

//                 {/* card / content */}
//                 <div className="bg-dark-300 rounded-2xl p-6">
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <h3 className="text-lg font-semibold">
//                         {data.role}{" "}
//                         <span className="text-gray-400 font-medium">— {data.company}</span>
//                       </h3>
//                       <p className="text-sm text-gray-400 mt-1">{data.duration}</p>
//                     </div>
//                   </div>

//                   <p className="text-gray-400 mt-4">{data.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Work;
