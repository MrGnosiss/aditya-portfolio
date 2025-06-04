import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

// Bug Bounty Data
const bugReports = [
  {
    target: "security.oppo.com",
    type: "XSS",
    description: "Reflected XSS in feedback form.",
    status: "Acknowledged",
  },
  {
    target: "Xvideos.com",
    type: "IDOR",
    description: "Unauthorized access to internal user data.",
    status: "Resolved",
  },
  // Add more as needed
];

export default function Portfolio() {
  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center bg-black/60 px-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Aditya Mishra
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl mt-4"
        >
          Cybersecurity Researcher | Bug Bounty Hunter
        </motion.p>
        <div className="flex gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/aditya-mishra-75990734b"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={30} />
          </a>
          <a href="https://github.io/mrgnosiss" target="_blank" rel="noreferrer">
            <Github size={30} />
          </a>
          <a href="mailto:teomiro@myyahoo.com">
            <Mail size={30} />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <section className="px-6 py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Web Security",
            "OSINT",
            "XSS",
            "SQLi",
            "Python",
            "Bash",
            "Payload Dev",
            "Tool Building",
          ].map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-gray-800 p-4 rounded-2xl shadow"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bug Bounty Submissions */}
      <section className="px-6 py-16 bg-gray-950">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Bug Bounty Submissions
        </h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {bugReports.map((bug, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow text-left"
            >
              <h3 className="text-xl font-bold">{bug.target}</h3>
              <p className="mt-1">Type: {bug.type}</p>
              <p className="mt-1">{bug.description}</p>
              <p className="mt-2 text-green-400">Status: {bug.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-6">Let's work together! Reach out via email or LinkedIn.</p>
        <a href="mailto:teomiro@myyahoo.com">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg">
            Send Message
          </button>
        </a>
      </section>
    </div>
  );
        }
