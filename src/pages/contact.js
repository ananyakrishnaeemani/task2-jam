import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Head from 'next/head';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://formspree.io/f/manbojla', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(e.target)
    });

    if (res.ok) {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
    <Head>
        <title>Contact | KeshavSoft</title>
        <meta name="description" content="Get in touch with KeshavSoft. We'd love to hear from you." />
      </Head>
      <Navbar />
      <Hero
        title="Get in Touch"
        subtitle="Let’s talk about how we can build something great together."
        noButtons
        minHeight="60vh"
      />

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                {submitted && <p className="text-success mt-3">Thank you! Your message has been sent.</p>}
              </form>
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Contact Information</h2>

              <div className="mb-4 border rounded p-3 shadow-sm bg-white contact-info-box">
                <h5>Address</h5>
                <p>456 Tech Park, Indiranagar, Bengaluru, India</p>
              </div>

              <div className="mb-4 border rounded p-3 shadow-sm bg-white contact-info-box">
                <h5>Phone</h5>
                <p>+91 98765 43210</p>
              </div>

              <div className="mb-4 border rounded p-3 shadow-sm bg-white contact-info-box">
                <h5>Email</h5>
                <p>hello@keshavsoft.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
