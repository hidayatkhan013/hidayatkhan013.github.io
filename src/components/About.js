import React from "react";

import Section from "../components/Section";
import Title from "../components/Title";

import Me from "../assets/img/me.jpg";

import "./styles/About.css";

export default function About() {
  return (
    <Section id="about">
      <div className="about reveal reveal-left">
        <div className="about--info">
          <Title>About me</Title>
          <p>I am a systems-focused software engineer with a strong background in Modern C++, Linux/POSIX programming, embedded platforms, and low-level device and storage engineering. My work spans storage sanitization, block-device handling, performance profiling, cross-platform build systems, and reliable software architectures for resource-constrained environments.</p>
          <p>My engineering interest lies in building deterministic, high-performance software that can operate close to the hardware while staying maintainable and testable. I enjoy working on C++/CMake-based toolchains, concurrency, profiling, embedded workflows, and systems-level troubleshooting.</p>
          <blockquote>Build reliable systems, optimize what matters, and keep the abstractions honest.</blockquote>

          <p>Here are some skills and tools that I have been working with:</p>

          <ul className="about--skills">
            <li>Modern C++ (11/14/17/20)</li>
            <li>Linux & POSIX Systems Programming</li>
            <li>Storage & Device Architecture (NVMe/SSD/HDD)</li>
            <li>Embedded & I2C Systems</li>
            <li>Multithreading & Concurrency</li>
            <li>CMake & Toolchains</li>
            <li>Google Test (GTest)</li>
            <li>Python & Qt</li>
            <li>Valgrind & Profiling</li>
            <li>Docker & CI/CD</li>
            <li>Data Structures & Algorithms</li>
            <li>Design Patterns & STL</li>
            <li>Socket & Network Programming</li>
            <li>FIX Protocol & Low-Latency Messaging</li>
            <li>CAN, FlexRay & SOME/IP</li>
            <li>Inter-Process Communication (IPC)</li>
            <li>GDB & Static Analysis (Clang-Tidy, Cppcheck)</li>
            <li>Git & Version Control</li>
          </ul>
        </div>

        <img className="about--photo" src={Me} alt="Hidayat Ur Rehman" />
      </div>
    </Section>
  );
}
