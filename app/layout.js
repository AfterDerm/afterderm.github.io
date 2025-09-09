import './globals.css';

export const metadata = {
  title: 'Skin Conditions – Patient Guides & OTC Picks',
  description: 'Educational skin-condition pages with dermatologist-favorite over-the-counter products and affiliate links. Not medical advice.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-white text-gray-900 font-sans">
        <div className="max-w-[1200px] mx-auto px-6">
          <header className="flex gap-4 items-center py-3 pb-5 border-b border-gray-200 mb-5">
            <div className="flex items-center gap-2.5 font-bold text-[#0e3a75]" aria-label="AfterDerm">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M7 13c3 3 7 3 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <div>
                <div>AfterDerm</div>
              </div>
              <div className="text-xs text-gray-500 font-normal mt-0.5">Dermatologist recommended product guides</div>
            </div>
          </header>
          {children}
          <footer className="mt-6 pt-4 border-t border-gray-200 text-gray-500 text-xs">
            <p>Educational reference only. Not medical advice. Always follow your own dermatologist's guidance.</p>
            <p>Not affiliated with any specific Dermatology practice.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
