# Sui React TypeScript

A modern React TypeScript scaffold for building decentralized applications on the Sui blockchain using Vite.

## ✨ Features

- ⚡ **Vite** for lightning-fast development
- 🔷 **TypeScript** with strict type checking
- ⚛️ **React 18** with modern hooks
- 💼 **Wallet Integration** with @mysten/dapp-kit
- 🔗 **Smart Contract Integration** template with type safety
- 🎨 **Modern UI** with Tailwind CSS
- 📱 **Responsive Design**
- 🛡️ **Type-Safe** smart contract interactions
- 🧭 **React Router** for navigation

## 🚀 Quick Start


# Clone the repository
```bash
git clone <your-repo-url>
cd react-sui-typescript
```

# Install dependencies
```bash
npm install
```

# Start development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your app.

## 📁 Project Structure

```
├── src/
│   ├── components/            # React components
│   ├── lib/smart-contract/    # Smart contract integration
│   │   ├── config.json        # Contract addresses
│   │   ├── client-transactions.ts  # Transaction builders
│   │   ├── queries.ts         # Read-only queries
│   │   ├── types.ts           # TypeScript interfaces
│   │   ├── utils.ts           # Utility functions
│   │   └── index.ts           # Main exports
│   ├── pages/                 # Page components
│   ├── providers/             # React context providers
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind configuration
└── vite.config.ts             # Vite configuration
```

## 🔧 Smart Contract Integration

### 1. Deploy Your Contract


# Deploy to devnet
```bash
sui client publish --gas-budget 100000000
```

### 2. Update Configuration

Edit \`src/lib/smart-contract/config.json\`:

```json
{
  "PACKAGE_ID": "0x_YOUR_PACKAGE_ID_HERE",
  "ADMIN_CAP": "0x_YOUR_ADMIN_CAP_HERE",
  "SHARED_OBJECT": "0x_YOUR_SHARED_OBJECT_HERE"
}
```

### 3. Define Types

Update \`src/lib/smart-contract/types.ts\`:

```typescript
export interface Item {
  id?: string
  name: string
  description: string
  price: number
  owner: string
  isActive: boolean
}
```

### 4. Create Transaction Builders

Update \`src/lib/smart-contract/client-transactions.ts\`:

```typescript
export const clientTransactions = {
  createItem: (name: string, description: string, price: number): Transaction => {
    const transaction = new Transaction()
    transaction.moveCall({
      target: \`\${PACKAGE_ID}::your_module::create_item\`,
      arguments: [
        transaction.object(SHARED_OBJECT),
        transaction.pure.string(name),
        transaction.pure.string(description),
        transaction.pure.u64(price),
      ],
    })
    return transaction
  }
}
```

## 🔑 Environment Variables

Create a \`.env.local\` file:

# Optional: For read-only queries
```bash
VITE_QUERY_PRIVATE_KEY=your_private_key_here
```

## 📦 Key Dependencies

- **@mysten/dapp-kit**: Sui wallet integration
- **@mysten/sui**: Sui TypeScript SDK
- **@tanstack/react-query**: State management for async operations
- **react**: React framework
- **react-router-dom**: Client-side routing
- **typescript**: TypeScript compiler
- **vite**: Build tool and dev server
- **tailwindcss**: Utility-first CSS framework

## 🎯 Usage in Components

```typescript
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit'
import { createItem, getItemInfo, type Item } from '@/lib/smart-contract'

// In your component
const { mutate: signAndExecute } = useSignAndExecuteTransaction()

const handleCreate = async () => {
  const transaction = await createItem('Item Name', 'Description', 1000000000)
  
  signAndExecute(
    { transaction },
    {
      onSuccess: () => console.log('Success!'),
      onError: (error: Error) => console.error('Error:', error),
    }
  )
}
```

## 🛠️ Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🚀 Deployment

### Vercel (Recommended)

# Install Vercel CLI
```bash
npm i -g vercel
```

# Deploy
```bash
vercel
```

### Netlify


# Build the project
```bash
npm run build
```
# Deploy the dist folder to Netlify


### Other Platforms

The app can be deployed to any static hosting platform:

- **GitHub Pages**: Use \`npm run build\` and deploy the \`dist\` folder
- **Railway**: Connect your GitHub repository
- **DigitalOcean**: Use App Platform with Node.js buildpack

## 🛡️ TypeScript Benefits

- **Type Safety**: Catch errors at compile time
- **IntelliSense**: Better IDE support and autocomplete
- **Refactoring**: Safe code refactoring with confidence
- **Documentation**: Types serve as inline documentation
- **Error Prevention**: Prevent runtime errors with strict typing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Sui Website](https://sui.io/)
- [Sui Discord](https://discord.com/invite/Sui)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Built with ❤️ for the Sui ecosystem**
