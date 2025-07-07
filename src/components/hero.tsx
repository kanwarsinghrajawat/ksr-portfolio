"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import { motion } from "framer-motion";

import {
  LuGithub as Github,
  LuLinkedin as Linkedin,
  LuMail as Mail,
} from "react-icons/lu";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <FloatingShapes />
          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <div className="relative z-10">
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-white">KANWAR</span>{" "}
              <span className="text-neutral-400">SINGH</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-neutral-400 tracking-wide">
              SOFTWARE DEVELOPER ENGINEER
            </h2>

            <div className="flex justify-center space-x-6 mb-12">
              <Link
                href="https://github.com/kanwarsinghrajawat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kanwar-singh-241a60169/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:kanwarsinghrajawat3@gmail.com"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <div className="inline-block border border-neutral-800 px-6 py-3 rounded-full">
              <p className="text-neutral-400 text-sm tracking-widest uppercase">
                3+ Years of Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#333" wireframe />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[4, -2, -3]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#444" wireframe />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={1.5} floatIntensity={3}>
        <mesh position={[2, 3, -7]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#555" wireframe />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={2}>
        <mesh position={[-3, -3, -4]}>
          <tetrahedronGeometry args={[1.2]} />
          <meshStandardMaterial color="#666" wireframe />
        </mesh>
      </Float>

      <Float speed={0.6} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[0, 4, -8]}>
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <meshStandardMaterial color="#777" wireframe />
        </mesh>
      </Float>
    </>
  );
}
