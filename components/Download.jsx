import React from "react";

const Download = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SyedBilal27.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SyedBilal.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <button
        onClick={onButtonClick}
        className="focus:outline-none bg-transparent py-[10px] px-[10px] border-2 border-[#555] hover:bg-[#555] text-white ease-out duration-300"
      >
        Download Resume
      </button>
    </>
  );
};

export default Download;
