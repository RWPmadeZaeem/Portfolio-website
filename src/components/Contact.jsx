/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const formRef = useRef(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://getform.io/f/raeggyva', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error submitting form: ${response.status}`);
      }

      const data = await response.json();
      console.log('Form data submitted:', data);

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <h2 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-stone-300 text-center pb-2">
        Let's Connect!
      </h2>

      <div className="flex justify-center items-center">
        <form ref={formRef} action="https://getform.io/f/raeggyva" method="POST" onSubmit={handleSubmit} className="flex flex-col w-full md:w-7/12">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`border-2 border-gray-500 bg-transparent rounded-md p-3 mb-3 focus:outline-none ${
              isSubmitting ? 'opacity-50' : 'hover:border-purple-500 dark:hover:border-orange-300 transition duration-300 ease-in-out transform'
            } ${isSubmitting ? 'scale-0.95' : ''}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`border-2 border-gray-500 bg-transparent rounded-md p-3 mb-3 focus:outline-none ${
              isSubmitting ? 'opacity-50' : 'hover:border-purple-500 dark:hover:border-orange-300 transition duration-300 ease-in-out transform'
            } ${isSubmitting ? 'scale-0.95' : ''}`}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className={`border-2 border-gray-500 bg-transparent rounded-md p-3 mb-5 focus:outline-none ${
              isSubmitting ? 'opacity-50' : 'hover:border-purple-500 dark:hover:border-orange-300 transition duration-300 ease-in-out transform'
            } ${isSubmitting ? 'scale-0.95' : ''}`}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-block py-3 px-8 w-max text-base font-medium rounded-md text-white ${
              isSubmitting ? 'bg-gray-400' : 'bg-violet-400 dark:bg-orange-400'
            } ${isSubmitting ? 'opacity-50' : ''} ${isSubmitting ? 'scale-0.95' : ''}`}
            onMouseDown={() => setIsSubmitting(true)}
            onMouseUp={() => setIsSubmitting(false)}
          >
            {isSubmitting ? 'Sending...' : 'Reach Out!'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
