export default function About() {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="about-title">
          Who
          <br />
          Am I?
        </h1>

        <div className="about-layout">
          <div className="photo-container">
            {/* Use the correct image path */}
            <img
              src="/1742563453825.jpg" // Path to your image in the public folder
              alt="Kimberly Mwaniki"
              className="photo-image"
              style={{ width: "100%", maxWidth: "24rem", borderRadius: "0.5rem" }} // Optional inline styles
            />
          </div>

          <div className="about-content">
            <p className="about-text">
              Hi there! I&apos;m Kimberly, the proud founder and CEO of Membu, an all-natural haircare brand dedicated to
              bringing out the best in your hair with pure, effective ingredients. As a data scientist by profession, I
              bring an analytical approach to everything I do, blending the art of innovation with the science of
              nature.
            </p>
            <p className="about-text">
              At Membu, we&apos;re passionate about creating products that not only nourish your hair but also empower
              you to feel your most confident and vibrant self. Whether I&apos;m diving into data or formulating the
              next game-changing product, I&apos;m always driven by a commitment to quality and authenticity. Let&apos;s
              grow together, naturally! ✨ 💖
            </p>
            <div className="button-group">
              <a href="/" className="btn btn-pink">
                BACK TO HOME
              </a>
              <a href="/skills" className="btn btn-pink">
                VIEW MY SKILLS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}