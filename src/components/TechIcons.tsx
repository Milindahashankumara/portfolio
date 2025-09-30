import { 
  // Frontend Icons
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  // Backend Icons  
  FaNodeJs,
  FaPython,
  FaJava,
  // Database Icons
  SiMongodb,
  SiMysql,
  SiPostgresql,
  // Tools Icons
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss 
} from 'react-icons/si';

export default function TechIcons() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 p-8">
      
      {/* Frontend Technologies */}
      <div className="flex flex-col items-center gap-2">
        <FaReact className="text-4xl text-blue-400 hover:text-blue-300 transition-colors" />
        <span className="text-xs text-white">React</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <SiNextdotjs className="text-4xl text-white hover:text-gray-300 transition-colors" />
        <span className="text-xs text-white">Next.js</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <SiTypescript className="text-4xl text-blue-600 hover:text-blue-500 transition-colors" />
        <span className="text-xs text-white">TypeScript</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <FaJs className="text-4xl text-yellow-400 hover:text-yellow-300 transition-colors" />
        <span className="text-xs text-white">JavaScript</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <FaHtml5 className="text-4xl text-orange-500 hover:text-orange-400 transition-colors" />
        <span className="text-xs text-white">HTML5</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <FaCss3Alt className="text-4xl text-blue-500 hover:text-blue-400 transition-colors" />
        <span className="text-xs text-white">CSS3</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <SiTailwindcss className="text-4xl text-cyan-400 hover:text-cyan-300 transition-colors" />
        <span className="text-xs text-white">Tailwind</span>
      </div>
      
      {/* Backend Technologies */}
      <div className="flex flex-col items-center gap-2">
        <FaNodeJs className="text-4xl text-green-500 hover:text-green-400 transition-colors" />
        <span className="text-xs text-white">Node.js</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <FaPython className="text-4xl text-yellow-500 hover:text-yellow-400 transition-colors" />
        <span className="text-xs text-white">Python</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <FaJava className="text-4xl text-red-500 hover:text-red-400 transition-colors" />
        <span className="text-xs text-white">Java</span>
      </div>
      
      {/* Database Technologies */}
      <div className="flex flex-col items-center gap-2">
        <SiMongodb className="text-4xl text-green-600 hover:text-green-500 transition-colors" />
        <span className="text-xs text-white">MongoDB</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <SiMysql className="text-4xl text-blue-600 hover:text-blue-500 transition-colors" />
        <span className="text-xs text-white">MySQL</span>
      </div>
      
      {/* Tools */}
      <div className="flex flex-col items-center gap-2">
        <FaGitAlt className="text-4xl text-orange-600 hover:text-orange-500 transition-colors" />
        <span className="text-xs text-white">Git</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <FaGithub className="text-4xl text-white hover:text-gray-300 transition-colors" />
        <span className="text-xs text-white">GitHub</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <FaFigma className="text-4xl text-purple-500 hover:text-purple-400 transition-colors" />
        <span className="text-xs text-white">Figma</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <FaDocker className="text-4xl text-blue-400 hover:text-blue-300 transition-colors" />
        <span className="text-xs text-white">Docker</span>
      </div>
      
    </div>
  );
}