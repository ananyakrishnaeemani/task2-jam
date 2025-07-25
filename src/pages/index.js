import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';



export default function HomePage() {
  return (
    <>
    <Head>
        <title>KeshavSoft | Home</title>
        <meta name="description" content="Innovative solutions for modern businesses looking to transform their online presence." />
      </Head>

      <Navbar />
      <Hero
  title="Elevate Your Digital Experience"
  subtitle="Innovative solutions for modern businesses looking to transform their online presence."
  cta1={{ href: '#services', label: 'Our Services' }}
  cta2={{ href: '/contact', label: 'Contact Us' }}
  minHeight="100vh"
/>


      <section className="py-5" id="services">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Core Services</h2>
            <p className="text-muted">Reliable, scalable, and crafted for impact</p>
          </div>
          <div className="row g-4">
            {[
              {
                img: '/assets/webdev.jpg',
                title: 'Web Application Development',
                desc: 'Robust frontend and backend solutions using modern stacks like React, Node.js, and Django.'
              },
              {
                img: '/assets/mobdev.png',
                title: 'Mobile App Development',
                desc: 'Cross‑platform mobile solutions using Flutter and React Native for intuitive experiences.'
              },
              {
                img: '/assets/ai.png',
                title: 'Automation & AI',
                desc: 'Smart systems including chatbots, analytics, and automation tools to optimize business workflows.'
              }
            ].map((s, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card feature-card h-100 shadow-sm border-0">
                  <Image src={s.img} className="card-img-top" alt={s.title} width={416} height={236}/>
                  <div className="card-body">
                    <h5 className="card-title">{s.title}</h5>
                    <p className="card-text">{s.desc}</p>
                    <Link href="#" className="btn btn-sm btn-outline-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Our Clients Say</h2>
            <p className="text-muted">Trusted by startups and enterprises alike</p>
          </div>
          <div className="row g-4">
            {[
              {
                img: '/assets/4.jpg',
                name: 'Anjali Mehta',
                role: 'Founder, EduLearn',
                text: 'KeshavSoft delivered a seamless learning platform for us. Their developers truly understand user experience.',
                stars: 5
              },
              {
                img: '/assets/5.jpeg',
                name: 'Raj Malhotra',
                role: 'CTO, FinWell',
                text: 'Their API team helped us scale our microservices with ease. Fast delivery and quality assurance!',
                stars: 4.5
              },
              {
                img: '/assets/6.jpg',
                name: 'Tanya Sinha',
                role: 'Head of Ops, QuickKart',
                text: 'From dashboards to internal tools, KeshavSoft consistently delivered on every milestone.',
                stars: 5
              }
            ].map((t, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm text-center p-4">
                  <Image src={t.img} className="rounded-circle testimonial-img mb-3" alt={t.name} width={100} height={100}/>
                  <h5 className="card-title">{t.name}</h5>
                  <p className="text-muted mb-2">{t.role}</p>
                  <p className="card-text">{t.text}</p>
                  <div className="text-warning">
                    {Array.from({length: Math.floor(t.stars)}, (_, i) => <i className="fas fa-star" key={i}></i>)}
                    {t.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="lead mb-4">Get started with our premium services today</p>
          <Link href="/contact" className="btn btn-light btn-lg px-5">Get in Touch</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
