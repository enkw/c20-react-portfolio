import React from 'react';

function Resume() {
  const resumeUrl = '/assets/Resume.pdf';

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'ian_wolfe_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <h2>My Resume</h2>
      <div>
        <embed src={resumeUrl} type="application/pdf" width="100%" height="600px" />
      </div>
      <div>
        <button className="btn btn-primary mt-3" onClick={handleDownloadClick}>
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
