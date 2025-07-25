import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Web Application Development',
      desc: 'Robust frontend and backend solutions using React, Node.js, Django, and more.',
      img: '/assets/webdev.jpg',
    },
    {
      title: 'Mobile App Development',
      desc: 'Cross-platform apps using Flutter and React Native for seamless UX.',
      img: '/assets/mobdev.png',
    },
    {
      title: 'Automation & AI',
      desc: 'Chatbots, AI assistants, and automation tools to optimize your business.',
      img: '/assets/ai.png',
    }
  ];

  return (
    <section className="py-5" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Core Services</h2>
          <p className="text-muted">Reliable, scalable, and crafted for impact</p>
        </div>
        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 border-0 shadow-sm">
                <img src={s.img} className="card-img-top" alt={s.title} />
                <div className="card-body">
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text">{s.desc}</p>
                  <Link href="#" className="btn btn-outline-primary btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
