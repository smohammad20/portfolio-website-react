
  import React from 'react';
  import { Slide } from 'react-slideshow-image';
  import 'react-slideshow-image/dist/styles.css';
  
  const MySlider = () => {
      const images = [
          "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
          "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      ];
  
      return (
          <Slide>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                      <span style={{ backgroundColor: '#1a202c', padding: '10px', borderRadius: '5px', color: '#fff' }}>I'm SANA MOHAMMAD, a passionate Student based in Computer Science. With a keen interest in web development, I've dedicated myself to creating innovative, visually appealing.</span>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                      <span style={{ backgroundColor: '#1a202c', padding: '10px', borderRadius: '5px', color: '#fff' }}>I specialize in front-end development and have a knack for responsive design. My journey in the world of Computers has equipped me with a solid foundation in Python, Java, HTML and CSS.</span>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                      <span style={{ backgroundColor: '#1a202c', padding: '10px', borderRadius: '5px', color: '#fff' }}>I'm always open to new opportunities and collaborationsI'm always open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out via{' '}
            <a className="text-blue-500 hover:text-blue-700" href="mailto:sanamohammad032@gmail.com">sanamohammad032@gmail.com</a> | (314)-335-0735</span>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                      <span style={{ backgroundColor: '#1a202c', padding: '10px', borderRadius: '5px', color: '#fff' }}>or connect with me on{' '}
            <a className="text-blue-500 hover:text-blue-700" href="https://www.linkedin.com/in/sana-mohammad-04b515289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>.</span>
                  </div>
              </div>
          </Slide>
      );
  };
  
  export default MySlider;