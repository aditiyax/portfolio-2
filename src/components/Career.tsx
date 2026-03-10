import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer - Intern</h4>
                <h5>Uptricks Pvt Ltd</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              During my Java Development internship, I focused on building and
              optimizing robust backend services using Java and Spring Boot. I
              successfully developed and deployed RESTful APIs that improved
              data retrieval efficiency for user profiles by 15%. Additionally,
              by leveraging Hibernate ORM to streamline data persistence
              operations, I reduced database interaction latency by 20%,
              directly contributing to faster and more reliable system
              performance for the overall team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Consultant - Development</h4>
                <h5>Oodles Technologies</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              At Oodles Technologies, I specialized in building highly scalable
              web and mobile applications using Node.js, NestJS, and TypeScript,
              successfully supporting over 50,000+ concurrent users. I take
              ownership of critical system architecture, designing RESTful APIs
              and driving database performance—including leading complex data
              migrations from MongoDB to PostgreSQL—to improve overall response
              times by 30% through strategic query optimization and caching.
              Beyond traditional backend development, I collaborate with DevOps
              teams to automate deployments using Docker and Jenkins, currently
              reducing release cycles by 40%. I also expanded my technical
              capabilities into Web3 by writing smart contracts in Solidity and
              Rust, and building infrastructure to track wallet deposits across
              chains like Solana and Ethereum. Ultimately, my focus is on
              consistently delivering fast, reliable, and production-grade
              solutions across both traditional and emerging tech stacks.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
