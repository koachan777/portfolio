"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Header } from "../components/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimalBackground } from "../components/AnimalBackground";

export default function Home() {
  return (
    <>
      <AnimalBackground />
      <div className="min-h-screen relative bg-transparent">
        <Header />

        <main className="container mx-auto px-4 py-8 md:py-12 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            <section id="hero" className="min-h-[40vh] md:min-h-[60vh] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left space-y-6"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Avatar className="w-32 h-32 mx-auto lg:mx-0 mb-4 md:w-48 md:h-48 md:mb-6 border-4 border-white/80 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <AvatarImage src="/profile.jpg" alt="小圷宣輝" />
                    <AvatarFallback className="text-3xl md:text-5xl font-bold">小圷</AvatarFallback>
                  </Avatar>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-3 text-gray-900 tracking-tight">
                    小圷 宣輝
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-800 font-medium mb-6">
                    Software Engineer & Creative Developer
                  </p>
                  <div className="flex justify-center lg:justify-start gap-4">
                    <a
                      href="https://x.com/koakutsu616"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <Image src="/x.png" alt="X" width={24} height={24} />
                    </a>
                    <a
                      href="https://github.com/koachan777"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <GitHubLogoIcon className="w-6 h-6" />
                    </a>
                    <a
                      href="https://qiita.com/koachan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <Image src="/qiita.png" alt="Qiita" width={24} height={24} />
                    </a>
                    <a
                      href="https://connpass.com/user/koachan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <Image src="/connpass.png" alt="connpass" width={24} height={24} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </section>

            <section id="about" className="min-h-[40vh] md:min-h-[60vh] flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">About Me</h2>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">基本情報</h3>
                      <ul className="space-y-2 md:space-y-3 text-gray-700">
                        <li className="flex items-center group">
                          <span className="font-medium w-20 md:w-24 group-hover:text-blue-600 transition-colors duration-300">名前：</span>
                          <span>小圷 宣輝</span>
                        </li>
                        <li className="flex items-center group">
                          <span className="font-medium w-20 md:w-24 group-hover:text-blue-600 transition-colors duration-300">生年月日：</span>
                          <span>2002年6月16日（22歳）</span>
                        </li>
                        <li className="flex items-center group">
                          <span className="font-medium w-20 md:w-24 group-hover:text-blue-600 transition-colors duration-300">出身地：</span>
                          <span>北海道帯広市</span>
                        </li>
                        <li className="flex items-center group">
                          <span className="font-medium w-20 md:w-24 group-hover:text-blue-600 transition-colors duration-300">趣味：</span>
                          <span>プログラミング、読書、旅行</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">自己紹介</h3>
                      <div className="space-y-3">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          帯広柏葉高校を卒業後、会津大学に進学し、現在はIT企業でソフトウェアエンジニアとして勤務しています。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>

          <section id="skills" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">興味・学習中の技術</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">フロントエンド</CardTitle>
                    <CardDescription>UI/UXやWeb表現に関心があり、日々新しい技術を学んでいます。</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">React</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Next.js</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">TypeScript</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Tailwind CSS</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">バックエンド</CardTitle>
                    <CardDescription>API設計やデータベース設計など、サーバーサイドの技術も学習しています。</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Node.js</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Python</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">PostgreSQL</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">MongoDB</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">その他</CardTitle>
                    <CardDescription>開発効率化や運用自動化のためのツールやインフラにも興味があります。</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Git</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Docker</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">AWS</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">CI/CD</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </section>

          <section id="projects" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">ポートフォリオサイト</CardTitle>
                    <CardDescription>Next.js、Tailwind CSS、Framer Motionを使用したモダンなポートフォリオサイト</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Next.js</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">TypeScript</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Tailwind CSS</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">タスク管理アプリ</CardTitle>
                    <CardDescription>React、Node.js、MongoDBを使用したフルスタックタスク管理アプリケーション</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">React</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Node.js</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">MongoDB</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}
