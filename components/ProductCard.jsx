'use client';
import { useState } from 'react';
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
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      {p.image && !imageError ? (
        <div className="aspect-[3/4] w-full bg-gray-200 sm:aspect-auto sm:h-96 overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-contain group-hover:opacity-75 transition-opacity"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="aspect-[3/4] w-full bg-gradient-to-br from-gray-100 to-gray-200 sm:aspect-auto sm:h-96 flex items-center justify-center" role="img" aria-label={p.name}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
      )}
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={withAffiliate(p.amazonUrl)} target="_blank" rel="noopener noreferrer" className="no-underline text-gray-900 hover:text-gray-700">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {p.name}
          </Link>
        </h3>
        {p.note && <p className="text-sm text-gray-500">{p.note}</p>}
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{p.brand}</p>
          <p className="text-sm font-medium text-gray-900">{p.category}</p>
        </div>
      </div>
    </div>
  );
}
