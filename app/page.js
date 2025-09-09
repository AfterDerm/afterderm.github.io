import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import conditions from '@/lib/conditions';

export default function Page() {
  return (
    <div className="grid">
      <Sidebar />
      <main className="main">
        <section className="card">
          <div className="in">
            <div className="badge">Overview</div>
            <h1 className="h1">Diseases & Conditions</h1>
            <p className="muted">Simple, trusted, over‑the‑counter recommendations by condition. Built to hand a patient a QR code and say “everything we talked about is here.”</p>
            <div className="hr"></div>
            <div className="kv">
              <div>
                <div className="h2">Quick start</div>
                <ol>
                  <li>Pick your condition from the left.</li>
                  <li>Follow the simple routine.</li>
                  <li>Purchase recommended products via the links.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="card" style={{marginTop: 16}}>
          <div className="in">
            <div className="h2">Popular conditions</div>
            <ul className="navlist" style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 12}}>
              {conditions.map(c => (
                <li key={c.slug}><Link href={`/conditions/${c.slug}`}>{c.title}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card" style={{marginTop: 16}}>
          <div className="in">
            <div className="h2">Important notes</div>
            <p className="disclaimer">This site uses affiliate links. If you purchase through a link, we may earn a small commission at no extra cost to you. Product suggestions are over‑the‑counter options common in dermatology practices; always follow your own clinician’s advice.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
