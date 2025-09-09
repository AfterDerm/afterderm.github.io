'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import conditions from '@/lib/conditions';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="card side" aria-label="Conditions">
      <div className="in">
        <div className="badge">Conditions A → Z</div>
        <ul className="navlist">
          {conditions.map(c => {
            const href = `/conditions/${c.slug}`;
            const current = pathname === href ? 'page' : undefined;
            return (
              <li key={c.slug}>
                <Link aria-current={current} href={href}>{c.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
