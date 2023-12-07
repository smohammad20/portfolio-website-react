const Education = () => {
    return (
      <div>
        <div className="mt-20 mb-5 mx-10 flex text-3xl font-bold">
          Education History
        </div>
        <div className="mx-10 my-5 flex font-bold">
          Master of Science in Computer Science
        </div>
        <div className="m-10 p-8 border-3 border-solid border-gray-300 rounded-md border-ddd">
          <p className="m-0">Saint Louis University, Graduating in May 2025</p>
        </div>
        <div class="mx-10 my-5 grid grid-rows-1 grid-flow-col gap-4">
          <div className="p-1 text font-bold">Relevant coursework:</div>
          <div className="p-1 rounded-md bg-orange-500">Artificial Intelligence</div>
          <div className="p-1 rounded-md bg-orange-500">Principles of Software Development</div>
          <div className="p-1 rounded-md bg-orange-500">Databases</div>
          <div className="p-1 rounded-md bg-orange-500">Computer Networks</div>
          <div className="p-1 rounded-md bg-orange-500">Machine Learning</div>
          <div className="p-1 rounded-md bg-orange-500">Human-Computer Interaction</div>
        </div>
        <div className="mx-10 my-5 flex font-bold">
          Bachelor of Science in Computer Science
        </div>
        <div className="m-10 p-8 border-3 border-solid border-gray-300 rounded-md border-ddd">
          <p className="m-0">Spandana Degree College, June 2022</p>
          <p className="m-0">GPA: 3.62/4.0</p>
        </div>
        <div class="mx-10 my-5 grid grid-rows-1 grid-flow-col gap-4">
          <div className="p-1 text font-bold">Relevant coursework:</div>
          <div className="p-1 rounded-md bg-orange-500">Data Structures and Algorithms</div>
          <div className="p-1 rounded-md bg-orange-500">Operating Systems</div>
          <div className="p-1 rounded-md bg-orange-500">Database Management Systems</div>
          <div className="p-1 rounded-md bg-orange-500">Programming Languages</div>
          <div className="p-1 rounded-md bg-orange-500">Web Technologies</div>
        </div>
      </div>
    );
  };
  
  export default Education;