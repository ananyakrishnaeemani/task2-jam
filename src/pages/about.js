import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import Team from '../components/Team'
import CallToAction from '../components/CallToAction'
import Head from 'next/head';
import Link from 'next/link'



export default function AboutPage() {
  return (
    <>
    <Head>
        <title>About Us | KeshavSoft</title>
        <meta name="description" content="Learn more about KeshavSoft – our journey, values, and team." />
      </Head>
      <Navbar />
      <Hero
  title="Our Story"
  subtitle="Engineering digital excellence since 2017"
  noButtons
  minHeight="60vh"
/>


      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Who We Are</h2>
              <p className="lead">KeshavSoft is a technology-first company focused on building high-impact web, mobile, and AI‑powered solutions.</p>
              <p className="lead">Founded in 2017 by passionate developers, KeshavSoft has grown into a trusted software partner for startups and enterprises alike.</p>
              <p className="lead">We pride ourselves on clear communication, deep technical expertise, and long‑term collaboration with every client we serve.</p>
            </div>
            <div className="col-lg-6">
              <img src="/assets/7.png" className="img-fluid rounded shadow" alt="Team collaboration" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Core Values</h2>
            <p className="text-muted">What drives us every day</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-brain', title: 'Engineering Excellence', desc: 'We focus on writing clean, scalable code and architecting reliable systems.' },
              { icon: 'fa-users', title: 'Client Collaboration', desc: 'We partner with clients, not just build for them — we listen, plan, and grow together.' },
              { icon: 'fa-rocket', title: 'Continuous Innovation', desc: 'We embrace new tools and ideas that push boundaries and create value.' }
            ].map((v, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="p-4 bg-white rounded shadow-sm h-100 text-center">
                  <div className="text-primary mb-3">
                    <i className={`fas ${v.icon} fa-3x`}></i>
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <Team />
      <CallToAction />
      <Footer />
    </>
  )
}
