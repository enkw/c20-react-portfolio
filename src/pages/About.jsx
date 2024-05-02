export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-md-6">
          <img src="./assets/images/me.jpg" alt="Picture of me and my cat Puck" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <p className="text-md-start">
              My name is Ian Wolfe and I'm a full stack developer! Still new to this, but I'm having a lot of fun learning. In the past I've dabbled in game development, and I have a Bachelor's degree in Media Arts & Studies.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Skills</h3>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Express</li>
                <li>Node</li>
                <li>AWS S3</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Apollo Server</li>
                <li>Webpack</li>
                <li>JsonWebToken</li>
                <li>MERN Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
