"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../../components/header";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";

interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const works: Work[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description: "Next.js、Tailwind CSS、Framer Motionを使用したモダンなポートフォリオサイト。レスポンシブデザインとスムーズなアニメーションを実装し、ユーザー体験を重視したデザインを心がけました。",
    imageUrl: "/works/project1.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "ECサイト",
    description: "React、Node.js、MongoDBを使用したフルスタックECサイト。商品管理、カート機能、決済システムを実装し、スケーラブルなアーキテクチャを採用しています。",
    imageUrl: "/works/project2.jpg",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "タスク管理アプリ",
    description: "Vue.js、Firebaseを使用したリアルタイムタスク管理アプリ。チームでの作業効率を向上させるための機能を多数実装しています。",
    imageUrl: "/works/project3.jpg",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"]
  }
];

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Works</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <motion.div
                key={work.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <div className="relative h-48">
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{work.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50/80 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {selectedWork && (
        <Modal
          isOpen={!!selectedWork}
          onClose={() => setSelectedWork(null)}
          title={selectedWork.title}
          description={selectedWork.description}
          technologies={selectedWork.technologies}
          imageUrl={selectedWork.imageUrl}
        />
      )}
    </div>
  );
} 