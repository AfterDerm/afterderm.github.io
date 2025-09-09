import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import conditions from '@/lib/conditions';

export function generateStaticParams() {
  return conditions.map(c => ({ slug: c.slug }));
}

export default function ConditionPage({ params }) {
  const data = conditions.find(c => c.slug === params.slug);
  if (!data) return <div className="wrapper"><p>Condition not found.</p></div>;
  return (
    <div className="grid">
      <Sidebar />
      <main className="main">
        <section className="card">
          <div className="in">
            <div className="badge">Guide</div>
            <h1 className="h1">{data.title}</h1>
            <p className="muted">{data.intro}</p>
            <div className="hr"></div>
            <div className="h2">Simple routine</div>
            <ul>
              {data.routine.map((r,i) => <li key={i}>{r}</li>)}
            </ul>
            <p className="muted" style={{marginTop:12}}><strong>When to see a dermatologist:</strong> {data.whenToSeeDerm}</p>
          </div>
        </section>

        <section className="card" style={{marginTop: 16}}>
          <div className="in">
            <div className="h2">Recommended products</div>
            <div className="products">
              {data.products.map((p,i) => <ProductCard key={i} p={p} />)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
