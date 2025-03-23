export default function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1 className="home-title">
          Hi, I&apos;m
          <br />
          Kimberly
          <br />
          Mwaniki
        </h1>
        <p className="home-subtitle">A data scientist based in Nairobi, Kenya</p>
        <div className="button-container">
          <a href="mailto:msomwa20@gmail.com" className="btn btn-outline">
            EMAIL ME
          </a>
          <a href="/about" className="btn btn-semi-transparent">
            ABOUT ME
          </a>
          <a href="/skills" className="btn btn-semi-transparent">
            MY SKILLS
          </a>
          <a href="/contact" className="btn btn-semi-transparent">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  )
}

