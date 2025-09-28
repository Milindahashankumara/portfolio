import Image from "next/image";

const HeroLogo = () => {
  return (
    <div className="absolute top-4 left-4 z-30">
      <div className="relative cursor-pointer">
        {/* Simple creative logo container */}
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-2xl shadow-lg transform rotate-12">
          <div className="absolute inset-[2px] bg-black rounded-2xl overflow-hidden">
            <Image
              src="/favicon.png"
              alt="Hashan's Logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 64px, 80px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLogo;