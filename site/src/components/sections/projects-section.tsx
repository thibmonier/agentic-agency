"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";

interface ProjectsSectionProps {
  items?: Project[];
}

export function ProjectsSection({ items }: ProjectsSectionProps = {}) {
  const data = items ?? projects;

  if (data.length < 3) {
    return null;
  }

  return (
    <section id="realisations" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Nos réalisations
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Des projets concrets, des résultats mesurables
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none md:pb-0">
            {data.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[280px] flex-shrink-0 snap-center rounded-2xl bg-gray-50 p-8 md:min-w-0 md:flex-shrink"
              >
                <span className="inline-block rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-medium px-3 py-1">
                  {project.sector}
                </span>

                <h3 className="mt-3 font-semibold text-[#1e3a5f]">{project.title}</h3>

                <p className="mt-2 italic text-gray-600">{project.impact}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#1e3a5f]/5 px-3 py-1 text-xs font-medium text-[#1e3a5f]">
                    {project.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
