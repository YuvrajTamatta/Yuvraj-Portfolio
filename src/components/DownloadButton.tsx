import React from 'react'

const ViewButton = () => {
  const handleViewPDF = () => {
    window.open("/SEM-4/CS-24_ OS CH-3_Getting Started with Unix, Unix Shell Command.pdf", "_blank");
  }

  return (
    <button 
      onClick={handleViewPDF}
      className="ml-8 p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary w-full sm:w-auto justify-center"
    >
      View Material
    </button>
  );
}

export default ViewButton