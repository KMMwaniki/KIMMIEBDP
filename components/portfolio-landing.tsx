export default function PortfolioLanding() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-pink-300 via-pink-400 to-orange-300">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Hi, I&apos;m
            <br />
            Kimberly
            <br />
            Mwaniki
          </h1>
          <p className="text-white text-lg md:text-xl mb-12">A data scientist based in Nairobi, Kenya</p>
          <a
            href="mailto:msomwa20@gmail.com"
            className="inline-block border border-white text-white rounded-full px-10 py-3 hover:bg-white/10 transition-colors duration-300"
          >
            EMAIL ME
          </a>
        </div>
      </div>
    )
  }