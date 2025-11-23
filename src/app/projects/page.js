"use client";

import {
  CloudIcon,
  FlameIcon,
  UserIcon,
  RocketIcon,
  GithubIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Dock, DockIcon } from "@/components/magicui/dock";
import useScrollRestoration from "@/hooks/useScrollRestoration";
import MiniMusicPlayer from "@/components/MiniMusicPlayer";

export default function Projects() {
  // Use the hook to fix scrolling issues
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Background Clouds */}
      <div className="absolute top-20 right-20">
        <CloudIcon className="w-32 h-32 text-gray-200" />
      </div>
      <div className="absolute bottom-40 left-20">
        <CloudIcon className="w-24 h-24 text-gray-200" />
      </div>
      <div className="absolute top-1/2 right-1/4">
        <CloudIcon className="w-40 h-40 text-gray-200" />
      </div>
      <div className="absolute bottom-20 right-32">
        <CloudIcon className="w-36 h-36 text-gray-200" />
      </div>
      <div className="absolute top-40 left-1/4">
        <CloudIcon className="w-28 h-28 text-gray-200" />
      </div>
      <div className="absolute top-60 right-60">
        <CloudIcon className="w-20 h-20 text-gray-200" />
      </div>

      {/* Header */}
      <div className="flex justify-center w-full pt-6 px-4 sm:px-0">
        <div className="w-full sm:w-[80%] border border-black rounded-lg bg-white/50 backdrop-blur-sm">
          <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6">
            <div
              className="text-xl sm:text-2xl font-black uppercase mb-2 sm:mb-0"
              style={{ fontFamily: "var(--font-dela-gothic)" }}
            >
              Projects
            </div>
            <div className="flex items-center gap-2">
              <MiniMusicPlayer />
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity p-2"
              >
                <FlameIcon className="w-6 h-6" />
              </Link>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 min-h-[80vh] relative py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Creations
            </h1>
            <div className="hidden md:block">
              <div className="text-right">
                <p
                  className="japanese-text text-2xl sm:text-3xl mb-2"
                  data-meaning="'Creation is the language of the soul.'"
                >
                  「創造は魂の言語」
                </p>
              </div>
            </div>
          </div>

          {/* Projects Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Row 1 */}
            <div className="md:col-span-2 aspect-[2/1] relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/project1.jpg"
                alt="GALACTUS"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">GALACTUS</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    A sleek web experience for immersive comic exploration.
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/SaadArqam/GALACTUS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://galactus-three.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-square relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/project2.jpg"
                alt="TEKRON"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">TEKRON</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Where future tech unfolds.
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/SaadArqam/TEKRON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://tekronfest.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
                        <div className="aspect-square relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/project6.jpg"
                alt="H-Collab"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">H-Collab</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    H-Collab is a platform designed to connect developers, designers, and innovators looking for teammates to participate in hackathons.
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/SaadArqam/-H-ckollab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://h-ckollab.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="md:col-span-2 aspect-[2/1] relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/project3.png"
                alt="SHARK'S SPHERE"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">
                    SHARK&apos;S SPHERE
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    A web platform for young visionaries and entrepreneurs.
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/SaadArqam/SharkSphere"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://shark-sphere-phi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}



            <div className="md:col-span-2 aspect-[2/1] relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/project5.jpg"
                alt="EMO"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">EMO</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    A minimal yet expressive platform that bridges emotion and
                    interaction with clean design and thoughtful UX
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/SaadArqam/emo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://emo-lime.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

                        <div className="aspect-square relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/project4.jpg"
                alt="WHO'S THAT POKEMON?"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">
                    WHO&apos;S THAT POKEMON?
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    A fun, modern web game with a clean UI for Pokémon
                    enthusiasts.
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/SaadArqam/Whos-That-Pokemon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://whos-that-pokemon-zeta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Quote - only visible on small screens */}
          <div className="mt-10 md:hidden">
            <p
              className="japanese-text text-2xl mb-2 text-center"
              data-meaning="'Creation is the language of the soul.'"
            >
              「創造は魂の言語」
            </p>
          </div>
        </div>
      </main>

      {/* Dock at the bottom */}
      <div className="fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 z-50">
        <Dock className="scale-75 sm:scale-100">
          <Link href="/">
            <DockIcon className="bg-white/90 shadow-md">
              <FlameIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
          <Link href="/about">
            <DockIcon className="bg-white/90 shadow-md">
              <UserIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
          <Link href="/projects">
            <DockIcon className="bg-white/90 shadow-md" isActive={true}>
              <RocketIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
          <Link href="/contact">
            <DockIcon className="bg-white/90 shadow-md">
              <CloudIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
        </Dock>
      </div>
    </div>
  );
}
