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
    <article className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden flex flex-col h-full" itemScope itemType="https://schema.org/Product">
      {p.image ? (
        // Using plain <img> to keep the project minimal and avoid extra Next/Image config
        <img src={p.image} alt={p.name} className="w-full h-[200px] object-contain bg-gray-50 border-b border-gray-200" loading="lazy" />
      ) : (
        <div className="w-full h-[200px] bg-gray-50 border-b border-gray-200" role="img" aria-label={p.name}></div>
      )}
      <div className="p-[18px]">
        <div className="text-base font-semibold mb-1.5" itemProp="name">{p.name}</div>
        <div className="text-gray-500">{p.brand}</div>
        {p.note && <p className="text-gray-500 mt-2">{p.note}</p>}
        <div className="mt-auto flex gap-2 items-center justify-between">
          <Link className="inline-flex items-center gap-2 bg-[#0e3a75] text-white border-none rounded-[10px] py-[10px] px-3 font-semibold cursor-pointer no-underline hover:brightness-110" href={withAffiliate(p.amazonUrl)} target="_blank" rel="noopener noreferrer">Buy on Amazon</Link>
          <span className="text-xs text-gray-500">{p.category}</span>
        </div>
      </div>
    </article>
  );
}
