import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function Header() {
  return (
    <div>
    
    <div className='text-right py-5'>
      <a
              href="https://github.com/RajibAliShah"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 rounded-full py-2 px-4 text-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300"
            >
              <FaGithub className="inline-block mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rajib-ali-shah-61869087/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 border border-gray-500 rounded-full py-2 px-4 text-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300"
            >
              <FaLinkedin className="inline-block mr-2" /> LinkedIn
            </a>
            <a
              href="https://twitter.com/Syed_Rajib"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 border border-gray-500 rounded-full py-2 px-4 text-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300"
            >
              <FaTwitter className="inline-block mr-2" /> Twitter
            </a></div>
            </div>
  )
}
