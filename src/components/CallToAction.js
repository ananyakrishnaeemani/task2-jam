export default function CallToAction() {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Want to Learn More?</h2>
        <p className="lead mb-4">Get in touch to explore how we can partner for your next project</p>
        <Link href="/contact" className="btn btn-light btn-lg px-5">Contact Us</Link>
      </div>
    </section>
  );
}
