import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import conditions from '@/lib/conditions';

export default function Page() {
  return (
    <div className="grid grid-cols-[260px_1fr] gap-5 max-[920px]:grid-cols-1">
      <Sidebar />
      <main className="max-[920px]:order-1">
        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden">
          <div className="p-[18px]">
            <div className="inline-block py-1 px-2 rounded-full bg-blue-50 border border-indigo-200 text-indigo-700 text-xs mb-2">Overview</div>
            <h1 className="text-3xl font-bold mb-1.5">Diseases & Conditions</h1>
            <p className="text-gray-500 mb-3">Simple, trusted, over‑the‑counter recommendations by condition. Built to hand a patient a QR code and say "everything we talked about is here."</p>
            <div className="h-px bg-gray-200 my-[12px]"></div>
            <div className="flex gap-2.5 items-center flex-wrap">
              <div>
                <div className="text-lg font-semibold mb-1.5">Quick start</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Pick your condition from the left.</li>
                  <li>Follow the simple routine.</li>
                  <li>Purchase recommended products via the links.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden mt-4">
          <div className="p-[18px]">
            <div className="text-lg font-semibold mb-1.5">Popular conditions</div>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[12px] list-none m-0 p-[10px]">
              {conditions.map(c => (
                <li key={c.slug}>
                  <Link href={`/conditions/${c.slug}`} className="block py-[10px] px-3 rounded-xl text-gray-900 no-underline border border-transparent hover:bg-gray-50 hover:border-gray-300">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden mt-4">
          <div className="p-[18px]">
            <div className="text-lg font-semibold mb-1.5">Important notes</div>
            <p className="text-xs text-gray-500 leading-relaxed">This site uses affiliate links. If you purchase through a link, we may earn a small commission at no extra cost to you. Product suggestions are over‑the‑counter options common in dermatology practices; always follow your own clinician's advice.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
