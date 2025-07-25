import Link from 'next/link'

const members = [
  { name: 'Keshav', role: 'Founder & CEO', image: '/assets/1.jpg', desc: 'Tech visionary with a passion for building scalable products and mentoring young developers.' },
  { name: 'Moksh Verma', role: 'CTO', image: '/assets/2.jpg', desc: 'Leads our architecture and engineering teams with a focus on performance and clean code.' },
  { name: 'Arjun Singh', role: 'Product Manager', image: '/assets/3.jpg', desc: 'Drives product strategy, user feedback loops, and cross-functional coordination.' }
];

export default function Team() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Team</h2>
          <p className="text-muted">Our leadership and core builders</p>
        </div>
        <div className="row g-4">
          {members.map((m, i) => (
            <div className="col-md-4" key={i}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <img src={m.image} className="rounded-circle team-member mb-3" alt={m.name} />
                  <h5 className="card-title">{m.name}</h5>
                  <p className="text-primary mb-2">{m.role}</p>
                  <p className="card-text">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
