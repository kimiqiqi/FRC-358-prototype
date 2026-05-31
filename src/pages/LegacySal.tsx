import { motion } from 'motion/react';
import { memorialData } from '../data/memorial';

export default function LegacySal() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <p className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest mb-4">Legacy</p>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[var(--text-primary)] leading-tight mb-6">
                {memorialData.title}
             </h1>
             <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-serif italic max-w-2xl mx-auto">
                "{memorialData.subtitle}"
             </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Team Statement */}
      <section className="py-20 md:py-32 section-pad relative">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-primary)] leading-relaxed">
               <p className="text-xl md:text-2xl font-medium mb-10 pb-10 border-b border-[var(--border-subtle)]">
                 {memorialData.statement.isApproved ? memorialData.statement.approvedText : memorialData.statement.placeholderText}
               </p>
             </div>
          </motion.div>
          
          {/* 3. His Impact */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-medium text-[var(--text-primary)] mb-8">His Enduring Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {memorialData.impactAreas.map((area, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-subtle)] polaroid-shadow shadow-sm"
                 >
                   <h3 className="font-bold text-lg mb-3 text-[var(--text-primary)]">{area.title}</h3>
                   <p className="text-[var(--text-secondary)] opacity-80 leading-relaxed text-sm md:text-base">
                     {area.description}
                   </p>
                 </motion.div>
               ))}
            </div>
          </div>
          
          {/* 4. Selected Tributes */}
          {memorialData.tributes.filter(t => t.isApproved).length > 0 && (
             <div className="mt-24 pt-16 border-t border-[var(--border-subtle)]">
               <h2 className="text-2xl font-display font-medium text-[var(--text-primary)] mb-10 text-center">Reflections</h2>
               <div className="space-y-8">
                 {memorialData.tributes.filter(t => t.isApproved).map(tribute => (
                    <motion.div key={tribute.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
                       <p className="text-lg md:text-xl text-[var(--text-secondary)] font-serif italic mb-4">"{tribute.quote}"</p>
                       <p className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-widest">— {tribute.author}</p>
                    </motion.div>
                 ))}
               </div>
             </div>
          )}
          
          {/* 5. Continuing His Legacy */}
           <div className="mt-24 pt-16 border-t border-[var(--border-subtle)] text-center">
             <h2 className="text-2xl font-display font-medium text-[var(--text-primary)] mb-8">Continuing His Legacy</h2>
             <div className="max-w-xl mx-auto space-y-6">
                {memorialData.legacyInitiatives.map((initiative, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-[var(--text-primary)] mb-2">{initiative.title}</h3>
                    <p className="text-[var(--text-secondary)] object-relaxed">{initiative.description}</p>
                  </div>
                ))}
             </div>
           </div>
           
        </div>
      </section>
    </div>
  );
}
