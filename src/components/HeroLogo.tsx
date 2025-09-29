import Image from "next/image";

const HeroLogo = () => {
  return (
    <>
      {/* Main Logo  */}
      <div className="absolute top-8 right-8 z-30">
        <div className="relative cursor-pointer">
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-2xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300">
            <div className="absolute inset-[2px] bg-black rounded-2xl overflow-hidden">
              <Image
                src="/favicon.png"
                alt="Hashan's Logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 56px, (max-width: 1024px) 64px, 72px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Complementary floating logo*/}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-pink-500/30 rounded-lg transform -rotate-12 backdrop-blur-sm border border-white/10">
          <div className="absolute inset-[1px] bg-black/60 rounded-lg overflow-hidden">
            <Image
              src="/favicon.png"
              alt="Hashan's Brand"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 768px) 32px, 40px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLogo;