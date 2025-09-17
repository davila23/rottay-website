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

### AWS Amplify Deployment

This project is configured for deployment to AWS Amplify.

#### Setup Instructions:

1. **Go to AWS Amplify Console**:
   - Navigate to [AWS Amplify](https://console.aws.amazon.com/amplify/)
   
2. **Create New App**:
   - Click "New app" → "Host web app"
   - Choose GitHub as source provider
   - Authorize AWS Amplify to access your GitHub account

3. **Connect Repository**:
   - Select the repository
   - Choose the `master` branch
   - Amplify will auto-detect the `amplify.yml` configuration

4. **Deploy**:
   - Click "Save and deploy"
   - First deployment takes 5-10 minutes

The site will be available at:
```
https://[branch-name].[app-id].amplifyapp.com
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
├── amplify.yml          # AWS Amplify configuration
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
