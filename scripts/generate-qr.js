const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const url = 'https://www.afterderm.com';
const outputDir = path.join(__dirname, '..', 'qr-codes');
const outputFile = path.join(outputDir, 'afterderm-qr.png');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate QR code
QRCode.toFile(outputFile, url, {
  width: 800,
  margin: 2,
  color: {
    dark: '#0e3a75',  // AfterDerm brand color
    light: '#FFFFFF'
  }
}, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  console.log('✓ QR code generated successfully!');
  console.log(`  File: ${outputFile}`);
  console.log(`  URL: ${url}`);
  console.log(`  Size: 800x800px`);
});
