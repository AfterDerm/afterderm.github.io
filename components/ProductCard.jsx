import Link from 'next/link';

function withAffiliate(url) {
  const tag = process.env.NEXT_PUBLIC_AFFILIATE_TAG;
  try {
    const u = new URL(url);
    if (tag && !u.searchParams.get('tag')) {
      u.searchParams.set('tag', tag);
    }
    return u.toString();
  } catch {
    return url;
  }
}

export default function ProductCard({ p }) {
  return (
    <article className="card pcard" itemScope itemType="https://schema.org/Product">
      {p.image ? (
        // Using plain <img> to keep the project minimal and avoid extra Next/Image config
        <img src={p.image} alt={p.name} className="pimg" loading="lazy" />
      ) : (
        <div className="pimg" role="img" aria-label={p.name}></div>
      )}
      <div className="in">
        <div className="h3" itemProp="name">{p.name}</div>
        <div className="muted">{p.brand}</div>
        {p.note && <p className="muted" style={{marginTop: 8}}>{p.note}</p>}
        <div className="pfooter">
          <Link className="cta" href={withAffiliate(p.amazonUrl)} target="_blank" rel="noopener noreferrer">Buy on Amazon</Link>
          <span className="tag">{p.category}</span>
        </div>
      </div>
    </article>
  );
}
