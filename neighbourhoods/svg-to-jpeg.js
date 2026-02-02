const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToJpeg() {
  try {
    console.log("Converting SVG logos to JPEG format...\n");

    // Read the SVG files
    const logoSvg = fs.readFileSync('public/logo.svg', 'utf8');
    const faviconSvg = fs.readFileSync('public/favicon.svg', 'utf8');

    // Convert logo.svg to JPEG (larger size for clarity)
    await sharp(Buffer.from(logoSvg))
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .jpeg({ quality: 95 })
      .toFile('public/logo.jpg')
      .then(() => console.log("✅ logo.jpg created (512x512)"));

    // Convert favicon.svg to JPEG (smaller size)
    await sharp(Buffer.from(faviconSvg))
      .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .jpeg({ quality: 95 })
      .toFile('public/favicon.jpg')
      .then(() => console.log("✅ favicon.jpg created (256x256)"));

    console.log("\n📂 JPEG files saved to: public/");
    console.log("   - logo.jpg");
    console.log("   - favicon.jpg");

  } catch (error) {
    console.error("❌ Error converting SVG to JPEG:", error.message);
    process.exit(1);
  }
}

convertSvgToJpeg();
