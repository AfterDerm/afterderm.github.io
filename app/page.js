import Link from 'next/link';
import conditions from '@/lib/conditions';

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden">
          <div className="p-[18px]">
            <div className="inline-block py-1 px-2 rounded-full bg-blue-50 border border-indigo-200 text-indigo-700 text-xs mb-2">Overview</div>
            <h1 className="text-3xl font-bold mb-1.5">Diseases & Conditions</h1>
            <p className="text-gray-500 mb-3">Simple, trusted, over‑the‑counter recommendations by condition.</p>
            <div className="h-px bg-gray-200 my-[12px]"></div>
            <div className="flex gap-2.5 items-center flex-wrap">
              <div>
                <div className="text-lg font-semibold mb-1.5">Quick start</div>
                <ol className="list-decimal list-inside space-y-1 text-sm sm:text-base">
                  <li>Pick your condition.</li>
                  <li>Follow the simple routine.</li>
                  <li>Discover recommended products.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden mt-4">
          <div className="p-4 sm:p-[18px]">
            <div className="text-lg font-semibold mb-1.5">Common conditions</div>
            <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-2 sm:gap-[12px] list-none m-0 p-0 sm:p-[10px]">
              {conditions.map(c => (
                <li key={c.slug}>
                  <Link href={`/conditions/${c.slug}`} className="block py-3 sm:py-[10px] px-3 rounded-xl text-gray-900 no-underline border border-transparent hover:bg-gray-50 hover:border-gray-300 active:bg-blue-50">
                    {c.shortTitle || c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden mt-4">
          <div className="p-[18px]">
            <div className="text-lg font-semibold mb-1.5">Affiliate Disclaimer</div>
            <p className="text-xs text-gray-500 leading-relaxed">This site uses affiliate links. If you purchase through a link, we may earn a small commission at no extra cost to you. Product suggestions are over‑the‑counter options common in dermatology practices; always follow your own clinician's advice.</p>
          </div>
        </section>
    </div>
  );
}
