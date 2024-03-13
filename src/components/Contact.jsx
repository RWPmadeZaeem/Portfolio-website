import React from 'react';
import Title from './Title';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xayrbvde");

  if (state.succeeded) {
    return <p className="text-center text-xl font-semibold">Thanks for contacting!</p>;
  }

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-7/12">
          <Title>Contact</Title>
          <label htmlFor="email" className="text-lg font-semibold mb-2">Email Address</label>
          <input
            id="email"
            type="email" 
            name="email"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500"
          />
          <label htmlFor="message" className="text-lg font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500"
          />
          <button 
            type="submit" 
            disabled={state.submitting}
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gray-700 dark:bg-orange-400 drop-shadow-md hover:stroke-white"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
