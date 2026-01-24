
'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const TypewriterText: React.FC = () => {
  const words = ["Founder", "Full-Stack Developer", "Product Manager", "Operation Manager"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="font-handwriting text-zinc-500 text-sm tracking-tight inline-block min-h-[1.25rem]">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 inline-block w-[2px] h-3 bg-zinc-400 ml-0.5 align-middle`}></span>
    </span>
  );
};

const Hero: React.FC = () => {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
      <div className="flex justify-center flex-1">
        <div className="relative bg-white dark:bg-zinc-100 p-4 pb-14 shadow-2xl rotate-[-3deg] border border-zinc-200 dark:border-zinc-300 transform transition-transform hover:rotate-0 hover:scale-105 duration-300 max-w-[280px] w-full">
          <div className="aspect-square bg-zinc-200 dark:bg-zinc-300 overflow-hidden">
            <img 
              src="/Public/HeadShot.JPG" 
              alt="Profile Selfie" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-4 flex flex-col items-center">
            <span className="font-handwriting text-zinc-700 text-xl tracking-tight">Ethan</span>
            <div className="mt-1">
              <TypewriterText />
            </div>
          </div>

          <div className="absolute bottom-2 right-4">
            <span className="font-handwriting text-zinc-400 text-xs tracking-tight">-San Jose</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start space-y-6">
        <h2 className="text-4xl font-bold tracking-tight">Links</h2>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <a 
            href="mailto:yijunmiao287@gmail.com" 
            className="w-fit flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-lg group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors flex items-center justify-center">
              <Mail size={20} className="text-rose-500" />
            </div>
            <span className="font-medium">Email</span>
          </a>

          <a 
            href="https://github.com/miaojj287" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-fit flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-lg group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors flex items-center justify-center">
              <Github size={20} className="text-zinc-900 dark:text-zinc-100" />
            </div>
            <span className="font-medium">GitHub</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/yijun-miao-etytech/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-fit flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-lg group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors flex items-center justify-center">
              <Linkedin size={20} className="text-blue-600" />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a 
            href="https://www.instagram.com/ethan_myj" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-fit flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-lg group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors flex items-center justify-center">
              <Instagram size={20} className="text-pink-600" />
            </div>
            <span className="font-medium">Instagram</span>
          </a>
          
          <div 
            className="relative flex flex-col items-center md:items-start gap-1 w-fit group cursor-pointer"
            onMouseEnter={() => setShowWeChat(true)}
            onMouseLeave={() => setShowWeChat(false)}
            onClick={() => setShowWeChat(!showWeChat)}
          >
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 transition-colors">
              <div className="w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-lg group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors flex items-center justify-center overflow-hidden">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 fill-[#07C160]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.2,13.2c0-2.3-2.3-4.1-5.1-4.1S5,10.9,5,13.2c0,1.2,0.6,2.3,1.6,3c0.1,0.1,0.1,0.3,0.1,0.4l-0.1,0.9c0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.1,0,0.2-0.1l1.1-0.6c0.1-0.1,0.3-0.1,0.4,0c0.5,0.2,1,0.3,1.5,0.3C12.9,17.4,15.2,15.5,15.2,13.2z M12.9,11.8c0.3,0,0.6,0.3,0.6,0.6s-0.3,0.6-0.6,0.6s-0.6-0.3-0.6-0.6S12.5,11.8,12.9,11.8z M7.4,11.8c0.3,0,0.6,0.3,0.6,0.6S7.7,13,7.4,13s-0.6-0.3-0.6-0.6S7.1,11.8,7.4,11.8z M19.2,8c0-2.7-2.8-5-6.2-5S6.7,5.2,6.7,8c0,0.2,0,0.3,0,0.5c0.5-0.3,1.1-0.5,1.7-0.7c0.6-0.2,1.2-0.3,1.8-0.3c3.5,0,6.3,2.3,6.3,5.1c0,1-0.3,1.9-1,2.7c0.9-0.5,1.7-1.1,2.3-1.8c0.1-0.1,0.3-0.1,0.4,0l1.4,0.8c0.1,0.1,0.2,0,0.2-0.1c0-0.1,0-0.2-0.1-0.3L19.6,13c-0.1-0.2-0.1-0.3-0.1-0.5C20.5,11.4,21.2,9.8,21.2,8L19.2,8z M11.1,6c0.4,0,0.7,0.3,0.7,0.8S11.5,7.5,11.1,7.5S10.4,7.2,10.4,6.8S10.7,6,11.1,6z M16.2,6c0.4,0,0.7,0.3,0.7,0.8s-0.3,0.8-0.7,0.8S15.5,7.2,15.5,6.8S15.8,6,16.2,6z"/>
                </svg>
              </div>
              <span className="font-medium group-hover:text-zinc-900 dark:group-hover:text-white">WeChat</span>
            </div>
            
            <div className={`
              overflow-hidden transition-all duration-300 ease-out md:pl-[52px]
              ${showWeChat ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <span className="text-sm font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800">
                Whynot287
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
