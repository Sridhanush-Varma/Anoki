# Anoki

![Anoki Logo](./public/images/anoki-logo-light.jpg)

A one-stop-shop for accessing popular AI tools, file converters, detectors, editors, and enhancers.

##  Overview

Anoki is a modern web application that provides easy access to a variety of online tools and services. It serves as a central hub for users to discover and utilize different tools without having to search across multiple websites.

###  Key Features

- **AI Tools Directory**: Quick access to popular AI agents like ChatGPT, Gemini, Claude, etc.
- **File Converters**: Convert between different file formats (PDF ↔ DOCX, JPG ↔ PNG, etc.)
- **AI/Plagiarism Detectors**: Links to tools for detecting AI-generated content and plagiarism
- **Image/Video Editors**: Simple upload-edit-save functionality for images and videos
- **Quality Enhancers**: Tools to enhance the resolution and quality of images and videos

##  Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with Framer Motion animations
- **File Handling**: react-dropzone for file uploads
- **Image Editing**: cropperjs for image manipulation
- **Icons**: react-icons

##  Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm (v9.6.7 or higher) or yarn (v1.22.19 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/anoki.git
   cd anoki
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Automatic Deployment (GitHub Actions)

The repository is configured with GitHub Actions to automatically deploy to GitHub Pages when you push to the main branch.

1. Push your changes to the main branch:
   ```bash
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy your site.

### Manual Deployment

You can also deploy manually using the gh-pages package:

1. Build the project:
   ```bash
   npm run export
   # or
   yarn export
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

### Configuration for Your Repository

To configure the project for your own GitHub Pages:

1. Update the `basePath` and `assetPrefix` in `next.config.js` with your repository name.
2. Update the GitHub Actions workflow in `.github/workflows/deploy.yml` if needed.

##  Project Structure

```
anoki/
├── public/              # Static files
│   └── images/          # Logo and other images
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── ai-tools/    # AI Tools page
│   │   ├── converters/  # File Converters page
│   │   ├── detectors/   # AI Detectors page
│   │   ├── editors/     # Image/Video Editors page
│   │   ├── enhancers/   # Quality Enhancers page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Home page
│   ├── components/      # Reusable components
│   └── utils/           # Utility functions
├── .eslintrc.json       # ESLint configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

##  Features in Detail

### Home Page
- Overview of all available tool categories
- Quick navigation cards to different sections
- Feature highlights and benefits

### AI Tools Page
- Grid of popular AI tools with logos
- Direct links to tools like ChatGPT, Gemini, Claude, etc.
- Additional resources and learning materials

### File Converters Page
- Upload interface with drag and drop functionality
- Multiple conversion options (PDF to DOCX, JPG to PNG, etc.)
- Download of converted files

### AI/Plagiarism Detectors Page
- Curated list of detection tools
- Features and pricing information
- Usage tips for educators and writers

### Image/Video Editors Page
- Basic image editing capabilities (crop, rotate, resize)
- Video editing features (coming soon)
- Links to professional editing tools

### Quality Enhancers Page
- AI-powered image and video enhancement
- Multiple enhancement levels
- Before/after comparison view

##  Dark Mode

Anoki includes a built-in dark mode that can be toggled via the theme button in the navigation bar. The theme preference is saved in local storage and will persist between visits.

##  Responsive Design

The application is fully responsive and works well on devices of all sizes, from mobile phones to desktop computers.

##  Future Enhancements

- User accounts for saving preferences and history
- More advanced file conversion options
- Integrated AI tools that run directly in the browser
- Additional tool categories based on user feedback
- API integrations with popular services

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


Built with using Next.js and TailwindCSS
