import './globals.css';

export const metadata = {
  title: 'Skin Conditions – Patient Guides & OTC Picks',
  description: 'Educational skin-condition pages with dermatologist-favorite over-the-counter products and affiliate links. Not medical advice.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <header className="header">
            <div className="logo" aria-label="AfterDerm">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M7 13c3 3 7 3 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <div>
                <div>AfterDerm</div>
              </div>
              <div className="tag">Dermatologist recommended product guides</div>
            </div>
          </header>
          {children}
          <footer className="footer">
            <p>Educational reference only. Not medical advice. Always follow your own dermatologist’s guidance.</p>
            <p>Not affiliated with Frontier Dermatology or any specific practice.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
