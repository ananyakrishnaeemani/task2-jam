export default function Timeline() {
  const events = [
    { year: '2017 - Founded', desc: 'KeshavSoft started as a 3-person team in a small coworking space in Bengaluru.' },
    { year: '2019 - First SaaS Launch', desc: 'We helped launch our first product for a fintech startup — still live today.' },
    { year: '2021 - 50+ Clients Served', desc: 'Crossed 50 clients across edtech, healthcare, and logistics.' },
    { year: '2023 - AI Integrations', desc: 'Launched internal chatbot and built AI integrations for client CRMs.' },
    { year: '2025 - Global Team', desc: 'Now 30+ team members working remotely and from HQ, supporting global clients.' }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Journey</h2>
          <p className="text-muted">Key milestones over the years</p>
        </div>
        <div className="timeline">
          {events.map((item, i) => (
            <div key={i} className="timeline-item mb-4">
              <h4>{item.year}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
