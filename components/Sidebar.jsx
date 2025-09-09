'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import conditions from '@/lib/conditions';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_24px_rgba(3,15,40,0.07)] overflow-hidden max-[920px]:order-2" aria-label="Conditions">
      <div className="p-[18px]">
        <div className="inline-block py-1 px-2 rounded-full bg-blue-50 border border-indigo-200 text-indigo-700 text-xs mb-2">Conditions A → Z</div>
        <ul className="list-none m-0 p-[10px]">
          {conditions.map(c => {
            const href = `/conditions/${c.slug}`;
            const current = pathname === href ? 'page' : undefined;
            const isActive = current === 'page';
            return (
              <li key={c.slug}>
                <Link 
                  aria-current={current} 
                  href={href} 
                  className={`block py-[10px] px-3 rounded-xl text-gray-900 no-underline border ${
                    isActive 
                      ? 'bg-blue-50 border-indigo-300' 
                      : 'border-transparent hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {c.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
