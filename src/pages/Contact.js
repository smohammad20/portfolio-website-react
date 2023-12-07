
import React from 'react';
import 'react-slideshow-image/dist/styles.css';

const ContactForm = () => {
  return (
    <section id="contact" className="contact">
      <div className="mt-20 mb-5 mx-10 flex text-3xl font-bold">
        Contact Me
      </div>
      <div className="my-5 mx-10">
        <form
          id="fs-frm"
          name="complaint-form"
          acceptCharset="utf-8"
          action="https://formspree.io/f/mdorvzbv"
          method="post"
          className="mt-4"
        >
          <div className="mb-4">
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="First and Last"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="Enter your email"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="complaint" className="block text-sm font-medium text-gray-600">
              Complaint
            </label>
            <textarea
              rows="6"
              name="complaint"
              id="complaint"
              placeholder="Message you want to send."
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>
          <input type="hidden" name="_subject" id="email-subject" value="Message form Submission" />
          <button
            type="submit"
            value="Submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};


export default ContactForm;