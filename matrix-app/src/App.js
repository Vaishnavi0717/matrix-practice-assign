import React, { useState } from 'react';
import "./App.css"

const story = [
  { text: "My name is Vaishnavi Punekar", image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" },
  { text: "Full stack web developer", image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" },
  { text: "from masai school", image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % story.length);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + story.length) % story.length);
  };

  return (
    <div>
      <div className="story-display">
        <img src={story[currentPage].image} alt="Story" />
        <p>{story[currentPage].text}</p>
      </div>
      <div className="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
