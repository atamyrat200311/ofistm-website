import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="sec">
      <div className="wrap py-xl nf">
        <div className="eyebrow"><span className="n">404</span><span className="ln" /><span>Page not found</span></div>
        <h1 className="h1">This page doesn&apos;t exist.</h1>
        <p className="sub" style={{ maxWidth: 520 }}>The link may be old or mistyped. Start from the home page or tell us what you were looking for.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn-acc">Back to home <span>→</span></Link>
          <Link href="/contact" className="btn btn-line">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
