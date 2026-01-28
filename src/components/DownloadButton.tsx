import React from 'react'

const DownlaodButton = () => {
  return (
    <a
      href="/CS – 10_ SAD, CH.2 Software Quality Assurance and Testing.pdf"
      download
    >
      <button className="ml-8 p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary w-full sm:w-auto justify-center">
        Download Material
      </button>
    </a>
  );
}

export default DownlaodButton