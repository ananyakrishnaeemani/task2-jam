export default function Testimonials() {
  const feedback = [
    {
      img: '/assets/4.jpg',
      name: 'Anjali Mehta',
      role: 'Founder, EduLearn',
      text: 'KeshavSoft delivered a seamless learning platform for us. Highly recommended.',
    },
    {
      img: '/assets/5.jpeg',
      name: 'Raj Malhotra',
      role: 'CTO, FinWell',
      text: 'Their API team helped us scale our microservices with ease. Amazing quality!',
    },
    {
      img: '/assets/6.jpg',
      name: 'Tanya Sinha',
      role: 'Head of Ops, QuickKart',
      text: 'From dashboards to internal tools, KeshavSoft always delivered on time.',
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Clients Say</h2>
          <p className="text-muted">Trusted by startups and enterprises alike</p>
        </div>
        <div className="row g-4">
          {feedback.map((f, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm text-center p-4">
                <img src={f.img} className="rounded-circle testimonial-img mb-3" alt={f.name} width="100" height="100" />
                <h5 className="card-title">{f.name}</h5>
                <p className="text-muted mb-2">{f.role}</p>
                <p className="card-text">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
