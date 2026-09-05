// 'use client';

// import { Download, Server, Database, Globe, Network } from 'lucide-react';
// import { motion } from 'framer-motion';

// const whatIDo = [
//   {
//     icon: Server,
//     title: 'Backend Development',
//     subtitle: 'High Performance & Scalable Systems',
//     desc: 'Membangun sistem backend yang andal, efisien, dan scalable',
//   },
//   {
//     icon: Network,
//     title: 'REST API Development',
//     subtitle: 'Clean & Robust API Design',
//     desc: 'Merancang arsitektur API yang bersih, terdokumentasi, dan modular',
//   },
//   {
//     icon: Database,
//     title: 'Database Management',
//     subtitle: 'Relational Schema & Query Optimization',
//     desc: 'Skema relasional yang terstruktur, indexing, dan optimalisasi data',
//   },
//   {
//     icon: Globe,
//     title: 'Web Application Development',
//     subtitle: 'End-to-End System Integration',
//     desc: 'Pengembangan aplikasi web menyeluruh dari backend hingga integrasi frontend',
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function WhatIDoSection() {
//   return (
//     <motion.section 
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: '-100px' }}
//       variants={containerVariants}
//       className="space-y-8 px-2"
//     >
//       <div>
//         <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
//           What I Do
//         </h3>
//       </div>

//       {/* Grid 2 Kolom Card dengan Staggered Scroll Animation */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
//         {whatIDo.map(({ icon: Icon, title, subtitle, desc }) => (
//           <motion.div
//             key={title}
//             variants={itemVariants}
//             className="flex items-center gap-5 rounded-[32px] border border-white/10 bg-[#080808] p-5 sm:p-6 hover:border-white/20 transition-all duration-300"
//           >
//             {/* Kotak Ikon Kiri Membulat Besar (Squircle Icon) */}
//             <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-[22px] bg-[#141414] text-zinc-200 border border-white/10">
//               <Icon size={32} strokeWidth={1.5} />
//             </div>

//             {/* Detail Teks */}
//             <div className="space-y-1">
//               <h4 className="font-normal text-white text-base sm:text-lg leading-snug">
//                 {title}
//               </h4>
//               <p className="text-xs text-zinc-400 font-sans">
//                 {subtitle}
//               </p>
//               <p className="text-xs text-zinc-500 leading-relaxed">
//                 {desc}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Tombol Download CV */}
//       <motion.div variants={itemVariants} className="flex justify-center pt-4">
//         <a
//           href="/cv.pdf"
//           download
//           className="inline-flex items-center gap-3 bg-white hover:bg-zinc-200 text-black font-medium pl-6 pr-2 py-2 rounded-full transition-all text-sm shadow-xl group"
//         >
//           <span>Download CV</span>
//           <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
//             <Download size={14} />
//           </span>
//         </a>
//       </motion.div>
//     </motion.section>
//   );
// }