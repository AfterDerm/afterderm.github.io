import ProductCard from '@/components/ProductCard';
import conditions from '@/lib/conditions';

export function generateStaticParams() {
  return conditions.map(c => ({ slug: c.slug }));
}

export default function ConditionPage({ params }) {
  const data = conditions.find(c => c.slug === params.slug);
  if (!data) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><p>Condition not found.</p></div>;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden">
          <div className="p-4 sm:p-[18px]">
            <div className="inline-block py-1 px-2 rounded-full bg-blue-50 border border-indigo-200 text-indigo-700 text-xs mb-2">Guide</div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1.5">{data.title}</h1>
            <p className="text-sm sm:text-base text-gray-500 mb-3">{data.intro}</p>
            <div className="h-px bg-gray-200 my-3 sm:my-[12px]"></div>
            <div className="text-base sm:text-lg font-semibold mb-1.5">Simple routine</div>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              {data.routine.map((r,i) => <li key={i}>{r}</li>)}
            </ul>
            <p className="text-xs sm:text-sm text-gray-500 mt-3"><strong>When to see a dermatologist:</strong> {data.whenToSeeDerm}</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended products</h2>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {data.products.map((p,i) => <ProductCard key={i} p={p} />)}
          </div>
        </section>
    </div>
  );
}
