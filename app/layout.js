import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Skin Conditions – Patient Guides & OTC Picks',
  description: 'Educational skin-condition pages with dermatologist-favorite over-the-counter products and affiliate links. Not medical advice.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 mt-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-gray-500 text-xs space-y-2">
              <p>Educational reference only. Not medical advice. Always follow your own dermatologist's guidance.</p>
              <p>Not affiliated with any specific Dermatology practice.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
