import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">KeshavSoft</h5>
            <p>Crafting high-performance digital products with precision and care.</p>
            <div className="d-flex gap-3 mt-3">
              <Link href="#"><i className="fab fa-facebook-f text-white"></i></Link>
              <Link href="#"><i className="fab fa-twitter text-white"></i></Link>
              <Link href="#"><i className="fab fa-linkedin-in text-white"></i></Link>
              <Link href="#"><i className="fab fa-instagram text-white"></i></Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-white">Home</Link></li>
              <li><Link href="/about" className="text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white">Web Applications</Link></li>
              <li><Link href="#" className="text-white">Mobile Solutions</Link></li>
              <li><Link href="#" className="text-white">AI & Automation</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p><i className="fas fa-map-marker-alt me-2"></i> 456 Tech Park, Bengaluru</p>
            <p><i className="fas fa-phone me-2"></i> +91 98765 43210</p>
            <p><i className="fas fa-envelope me-2"></i> hello@keshavsoft.com</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 KeshavSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
