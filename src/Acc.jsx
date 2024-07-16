import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
    { title: "Section 3", content: "Content for Section 3" },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <h2
            onClick={() => handleToggle(index)}
            style={{
              margin: 0,
              padding: '10px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            {item.title}
          </h2>
          {activeIndex === index && (
            <div style={{
              display: 'block',
              margin: 0,
              padding: '10px',
              border: '1px solid #ccc',
              borderTop: 'none',
            }}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
