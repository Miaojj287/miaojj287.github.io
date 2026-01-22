
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1" />
        <h2 className="text-3xl font-bold px-4 whitespace-nowrap">About</h2>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1" />
      </div>
      
      <div className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed space-y-4">
        <p>
          Greetings! This is Yìjùn Miào (缪亦隽, Ethan). I’m an innovative technical Product Manager with strengths in product roadmap planning, engineering understanding, and customer insight. 
          I have independently led or driven the development of 10+ products across Web, iOS, and Android, 
          and I work efficiently with engineering teams to ship and iterate complex products quickly. I’m committed to turning cutting-edge AI into scalable commercial products.
        </p>
        <p>
          In 2022, with the groundbreaking emergence of GPT-3., I founded ETYTECH to disrupt the traditional development industry. 
          Since then, we’ve used AI to build multiple products for clients in a cost-effective and efficient way, while continuously developing our own products. 
          I believe that in the AI era, highly vertical and highly customized software will become the mainstream—let’s see what’s next.
        </p>
          <p>
          I currently focus on using AI to empower traditional software—you can see some of them in the “Projects” section on this page. My further research interests are in AR and smart wearable devices.
          If you’re interested in any aspect of my work, I’m always open to discussions and collaborations. Feel free to reach out by email or add me on WeChat.
        </p>
      </div>
    </div>
  );
};

export default About;
