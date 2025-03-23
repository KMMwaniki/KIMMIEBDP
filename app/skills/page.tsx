export default function Skills() {
  return (
    <div className="page-container">
      <div className="container skills-container">
        <div>
          <h1 className="skills-title">What I Do</h1>

          <div className="skills-card">
            <h2 className="skills-subtitle">Technical Skills</h2>

            <ul className="skill-list">
              <li>
                <strong>Programming Languages:</strong> SQL, Python, R, C++
              </li>
              <li>
                <strong>Data Analysis & Visualization:</strong> Expertise in analyzing and visualizing data using Power
                BI, Excel, and Python (Pandas, NumPy, Matplotlib, Seaborn)
              
              </li>
              <li>
                <strong>Database Management:</strong> Proficient in SQL for querying and managing data in relational
                databases
              </li>
              <li>
                <strong>Tools & Software:</strong> Experienced in data manipulation, analysis, and reporting with Power
                BI, Excel, and Jupyter Notebooks
              </li>
              <li>
                <strong>Data Science:</strong> Knowledge in applying machine learning models, data cleaning, and
                statistical analysis using R and Python
              </li>
              <li>
                <strong>Problem Solving & Optimization:</strong> Strong foundation in C++ for performance optimization
                and algorithm development
              </li>
            </ul>

            <div className="button-group">
              <a href="/" className="btn btn-pink">
                BACK TO HOME
              </a>
              <a href="/about" className="btn btn-pink">
                ABOUT ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

