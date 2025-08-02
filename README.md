# Flowbiii

A modern, interactive flow builder application built with Next.js and React Flow. Create, edit, and manage visual workflows with an intuitive drag-and-drop interface.

## Features

- **Visual Flow Builder**: Drag-and-drop interface for creating complex workflows
- **Node-based Editor**: Add, connect, and configure various types of nodes
- **Real-time Updates**: Live editing with instant visual feedback
- **Modern UI**: Clean, responsive design with dark/light theme support
- **Type-safe**: Built with TypeScript for enhanced developer experience

## Tech Stack

- **Framework**: Next.js 15.4.4 with App Router
- **React**: 19.1.0
- **Flow Editor**: @xyflow/react for the visual flow interface
- **State Management**: Zustand for efficient state handling
- **Styling**: Tailwind CSS with Radix UI components
- **Theme**: next-themes for dark/light mode support
- **Icons**: Lucide React
- **Notifications**: Sonner for toast notifications

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd flowbiii
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── flow-builder/    # Flow builder related components
│   ├── navigation-bar/  # Navigation components
│   └── ui/              # Reusable UI components
├── constants/           # Application constants
├── lib/                 # Utility libraries
├── providers/           # React context providers
├── store/               # Zustand state management
└── types/               # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

---

Built with ❤️ using Next.js and React Flow
