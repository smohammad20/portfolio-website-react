import { useState } from "react";
import "../App.css";
import MySlider from "./MySlider";


const Home = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <img
            src="https://smohammad20.github.io/project2/sana.jpeg"
            className="h-96 w-50 rounded-full border-4 border-white"
            alt="My Image"
            onClick={() => setShowOverlay(true)}
          />
          {showOverlay && <div className="targeting-box" />}
        </div>
        <div className="m-10 flex justify-center text-2xl font-bold">
          SANA MOHAMMAD
        </div>
        <div className="m-10 flex justify-center">
          sana.mohammad@slu.edu | (314)-335-0735
        </div>
        {/* <div className="m-10 p-8 border-3 border-solid border-gray-300 rounded-md border-ddd">
          <p className="m-0">I'm SANA MOHAMMAD, a passionate Student based in Computer Science. With a keen interest in web development, I've dedicated myself to creating innovative, visually appealing.</p>
        </div>
        <div className="m-10 p-8 border-3 border-solid border-gray-300 rounded-md border-ddd">
          <p className="m-0">I specialize in front-end development and have a knack for responsive design. My journey in the world of Computers has equipped me with a solid foundation in Python, Java, HTML and CSS.</p>
        </div>
        <div className="m-10 p-8 border-3 border-solid border-gray-300 rounded-md border-ddd">
          <p className="m-0">
            I'm always open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out via{' '}
            <a className="text-blue-500 hover:text-blue-700" href="mailto:sanamohammad032@gmail.com">sanamohammad032@gmail.com</a> | (314)-335-0735 or connect with me on{' '}
            <a className="text-blue-500 hover:text-blue-700" href="https://www.linkedin.com/in/sana-mohammad-04b515289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>.
          </p>
        </div> */}
        <div className="p-10 b-30">
        <MySlider />
        </div>
      </div>
    </>
  );
};

export default Home;