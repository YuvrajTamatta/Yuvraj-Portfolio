import React from 'react'

const DownlaodButton = () => {
  return (
    <a
      href="/CS-39_ Introduction of Cloud Computing.pdf"
      download
    >
      <button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary w-full sm:w-auto justify-center">
        Download PDF
      </button>
    </a>
  );
}

export default DownlaodButton