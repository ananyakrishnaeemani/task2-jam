import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="lead mb-4">Get started with our premium services today</p>
        <Link href="/contact" className="btn btn-light btn-lg px-5">Get in Touch</Link>
      </div>
    </section>
  );
}
