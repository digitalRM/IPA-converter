# IPA Converter

A modern web application for converting English text to International Phonetic Alphabet (IPA) notation. Built with Next.js, TypeScript, and Tailwind CSS.


![IPA Converter - English to International Phonetic Alphabet](https://github.com/user-attachments/assets/5a27abb8-7442-4997-9fb7-2c791421f022)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/digitalRM/IPA-converter.git
   cd ipa-converter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter English text in the input field
2. Click "Convert to IPA" or press Enter
3. The IPA transcription will appear in the output field

Example conversions:

- "hello" → "hɛloʊ"
- "world" → "wɝld"
- "computer" → "kəmpjutɝ"

## Technical Details

The converter uses a phoneme-based approach to convert English text to IPA. It includes:

- Mapping for common English phonemes
- Support for multi-character phonemes (e.g., "ch", "th")
- Fallback handling for unknown characters
- Custom font loading for IPA symbols

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
ipa-converter/
├── app/
│   ├── components/
│   │   └── IPAConverter.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.JS as the base framework
- Tailwind CSS for the styling utilities
- Noto Sans font for IPA symbol support
