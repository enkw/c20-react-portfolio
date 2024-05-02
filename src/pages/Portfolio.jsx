const projects = [
  {
    title: 'Just Another Text Editor',
    imageUrl: './assets/images/project1.png',
    deployedUrl: 'https://c19-text-editor.onrender.com/',
    githubUrl: 'https://github.com/enkw/c19-text-editor'
  },
  {
    title: 'Richter Rumble',
    imageUrl: './assets/images/project2.png',
    deployedUrl: 'https://enkw.github.io/business-review-game/',
    githubUrl: 'https://github.com/enkw/business-review-game'
  },
  {
    title: 'To Do List',
    imageUrl: './assets/images/project3.png',
    deployedUrl: 'https://c11-note-taker.onrender.com/',
    githubUrl: 'https://github.com/enkw/c11-Note-Taker'
  },
  {
    title: 'E-Commerce Back End',
    imageUrl: './assets/images/project4.png',
    deployedUrl: 'https://drive.google.com/file/d/1j4wviciI1lV-m28W0uTu3hd9XWKTtNwR/view',
    githubUrl: 'https://github.com/enkw/c13-e-commerce-back-end'
  },
  {
    title: 'Employee Tracker',
    imageUrl: './assets/images/project5.png',
    deployedUrl: 'https://drive.google.com/file/d/1uqC6zM-MHdlH5eF9y5g3TYYCaYgVt4EH/view',
    githubUrl: 'https://github.com/enkw/c12-Employee-Tracker'
  },
  {
    title: 'README Generator',
    imageUrl: './assets/images/project6.png',
    deployedUrl: 'https://drive.google.com/file/d/1oSL23y9zeA6RKMeNkJh8-xS52Jap3vd-/view',
    githubUrl: 'https://github.com/enkw/c09-readme-generator'
  },
];

export default function Portfolio() {
  return (
    <div className="container">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.imageUrl} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">Click below to view:</p>
                <div>
                  <a href={project.deployedUrl} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">Demo App</a>
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
