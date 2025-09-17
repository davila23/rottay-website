# Rottay - AI & Blockchain Solutions

A modern, professional website for Rottay built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and a sophisticated design.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with sophisticated color palette (black, gray, beige, white)
- **Smooth Animations**: Powered by Framer Motion for fluid user experience
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **Type Safe**: Full TypeScript implementation
- **Component Based**: Modular and reusable component architecture

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Font**: Inter & Space Grotesk

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/rottay-website.git

# Navigate to the project
cd rottay-website

# Install dependencies with yarn
yarn install
```

## 🔧 Development

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

Open [http://localhost:3000](http://localhost:3000) to view the app in development mode.

## 🚀 Deployment

### Vercel Deployment with GitHub Actions

This project is configured for automatic deployment to Vercel using GitHub Actions.

#### Setup Instructions:

1. **Create a Vercel Account** and link your project
2. **Get Vercel Tokens**:
   - Go to [Vercel Dashboard](https://vercel.com/account/tokens)
   - Create a new token
3. **Add GitHub Secrets**:
   - Go to your GitHub repository settings
   - Navigate to Settings > Secrets > Actions
   - Add the following secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Found in `.vercel/project.json` after running `vercel link`
     - `VERCEL_PROJECT_ID`: Found in `.vercel/project.json` after running `vercel link`

4. **Link Project Locally** (one-time setup):
```bash
# Install Vercel CLI
yarn global add vercel

# Link your project
vercel link
```

5. **Automatic Deployments**:
   - Push to `main`/`master` branch → Production deployment
   - Push to any other branch → Preview deployment

### Manual Vercel Deployment

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel
```

## 📁 Project Structure

```
rottay-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Solutions, etc.)
│   └── ui/              # Reusable UI components
├── lib/                  # Utility functions
├── public/              # Static assets
├── .github/             # GitHub Actions workflows
│   └── workflows/
│       ├── deploy.yml   # Production deployment
│       └── preview.yml  # Preview deployment
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Color Palette

- **Black**: #0A0A0A - #4A4A4A
- **Gray**: #5A5A5A - #CACACA
- **Beige**: #8B7D6B - #FAF8F4
- **White**: #FFFFFF

## 📝 Environment Variables

No environment variables are required for basic functionality. For analytics or API integrations, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Rottay.

## 📧 Contact

For inquiries, please contact: hello@rottay.ai

---

Built with ❤️ by Rottay Team
