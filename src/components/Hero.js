export default function Hero({ title, subtitle, cta1, cta2, noButtons, minHeight = '100vh' }) {
  return (
    <section
      className="hero-section text-white d-flex align-items-center"
      style={{
        backgroundImage: "url('/assets/9.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: minHeight,
        padding: '6rem 0'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="display-3 fw-bold mb-4">{title}</h1>
            <p className="lead">{subtitle}</p>
            {!noButtons && (
              <div className="mt-4">
                <a href={cta1?.href} className="btn btn-primary btn-lg me-3">{cta1?.label}</a>
                <a href={cta2?.href} className="btn btn-outline-light btn-lg">{cta2?.label}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
