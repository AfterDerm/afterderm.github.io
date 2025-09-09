import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import conditions from '@/lib/conditions';

export function generateStaticParams() {
  return conditions.map(c => ({ slug: c.slug }));
}

export default function ConditionPage({ params }) {
  const data = conditions.find(c => c.slug === params.slug);
  if (!data) return <div className="max-w-6xl mx-auto px-6"><p>Condition not found.</p></div>;
  return (
    <div className="grid grid-cols-[260px_1fr] gap-5 max-[920px]:grid-cols-1">
      <Sidebar />
      <main className="max-[920px]:order-1">
        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden">
          <div className="p-[18px]">
            <div className="inline-block py-1 px-2 rounded-full bg-blue-50 border border-indigo-200 text-indigo-700 text-xs mb-2">Guide</div>
            <h1 className="text-3xl font-bold mb-1.5">{data.title}</h1>
            <p className="text-gray-500 mb-3">{data.intro}</p>
            <div className="h-px bg-gray-200 my-[12px]"></div>
            <div className="text-lg font-semibold mb-1.5">Simple routine</div>
            <ul className="list-disc list-inside space-y-1">
              {data.routine.map((r,i) => <li key={i}>{r}</li>)}
            </ul>
            <p className="text-gray-500 mt-3"><strong>When to see a dermatologist:</strong> {data.whenToSeeDerm}</p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden mt-4">
          <div className="p-[18px]">
            <div className="text-lg font-semibold mb-1.5">Recommended products</div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[14px]">
              {data.products.map((p,i) => <ProductCard key={i} p={p} />)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
