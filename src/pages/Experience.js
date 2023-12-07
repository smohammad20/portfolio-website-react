
const Skills = () => {
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Programming languages:</h3>
        <div className="flex">
          <img className="w-20 h-20 mr-2" src="./images/java.png" alt="Java" />
          <img className="w-20 h-20 mr-2" src="./images/python.png" alt="Python" />
          <img className="w-20 h-20 mr-2" src="./images/c++.png" alt="C++" />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Operating systems:</h3>
        <div className="flex">
          <img className="w-20 h-20 mr-2" src="./images/4.png" alt="Windows" />
          <img className="w-20 h-20 mr-2" src="./images/5.png" alt="Linux" />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Database management:</h3>
        <div className="flex">
          <img className="w-20 h-20 mr-2" src="./images/6.png" alt="SQL" />
          <img className="w-20 h-20 mr-2" src="./images/7.png" alt="MySQL" />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Web development:</h3>
        <div className="flex">
          <img className="w-20 h-20 mr-2" src="./images/8.png" alt="HTML" />
          <img className="w-20 h-20 mr-2" src="./images/9.png" alt="CSS" />
          <img className="w-20 h-20 mr-2" src="./images/10.png" alt="JS" />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Version control:</h3>
        <img className="w-20 h-20 mr-2" src="./images/11.png" alt="JS" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Software development methodologies:</h3>
        <div className="flex">
          <img className="w-20 h-20 mr-2" src="./images/12.jpeg" alt="HTML" />
          <img className="w-20 h-20 mr-2" src="./images/13.png" alt="CSS" />
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-4">Certifications</h1>
      <div className="my-10 p-4 border-3 border-solid border-gray-300 rounded-md border-ddd">
        <h2 className="m-0 font-bold">Certified in Python , Integrated institute of advanced studies , Aug 2022</h2>
        <h2 className="m-0 font-bold">Certified in Java , Integrated institute of advanced studies , Nov 2022</h2>
        <h2 className="m-0 font-bold">Certified Google IT Support, Coursera, 6 May 2020</h2>
      </div>
    </div>
  );
};

const imageSources = [
  './images/14.png',
  './images/14.png',
  './images/14.png',
  './images/14.png'
];



const Projects = () => {
  const firstImageUrl = 'https://smohammad20.github.io/project2/project.html';
  const secondImageUrl = 'https://www.example.com/';
  const thirdImageUrl = 'https://smohammad20.github.io/project2/index.html';

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-wrap justify-center">
        {/* First Row */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-2">
          <a href={firstImageUrl} target="_blank" rel="noopener noreferrer">
            <div className="image-container bg-gray-300 rounded-md overflow-hidden relative">
              <img src={imageSources[0]} alt="Image 1" className="w-full h-auto" />
              <button className="absolute bottom-0 left-0 bg-transparent text-blue-800 font-bold px-4 py-2 rounded-bl-md">
                Open Webpage
              </button>
            </div>
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-2">
          <a href={thirdImageUrl} target="_blank" rel="noopener noreferrer">
            <div className="image-container bg-gray-300 rounded-md overflow-hidden relative">
              <img src={imageSources[1]} alt="Image 2" className="w-full h-auto" />
              <button className="absolute bottom-0 left-0 bg-transparent text-blue-800 font-bold px-4 py-2 rounded-bl-md">
                Open Webpage
              </button>
            </div>
          </a>
        </div>

        {/* Second Row */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-2">
          <a href={firstImageUrl} target="_blank" rel="noopener noreferrer">
            <div className="image-container bg-gray-300 rounded-md overflow-hidden relative">
              <img src={imageSources[2]} alt="Image 3" className="w-full h-auto" />
              <button className="absolute bottom-0 left-0 bg-transparent text-blue-800 font-bold px-4 py-2 rounded-bl-md">
                Open Webpage
              </button>
            </div>
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-2">
          <a href={secondImageUrl} target="_blank" rel="noopener noreferrer">
            <div className="image-container bg-gray-300 rounded-md overflow-hidden relative">
              <img src={imageSources[3]} alt="Image 4" className="w-full h-auto" />
              <button className="absolute bottom-0 left-0 bg-transparent text-blue-800 font-bold px-4 py-2 rounded-bl-md">
                Open Webpage
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};


const Experience = () => {
  return (
    <>
      <Skills />
      <Certifications />
      <Projects />
    </>
  );
};


export default Experience;