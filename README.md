```markdown
# React + TypeScript + Vite with Clerk Authentication

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR), ESLint rules, and Clerk authentication.

## Features

- Fast Refresh for React using either:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) (uses Babel)
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (uses SWC)
- TypeScript support for type checking
- ESLint configuration with recommended settings
- Clerk Authentication for user sign-in and sign-out

## Setup

To get started with this template, you can clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

Then, run the development server:

```bash
npm run dev
```

### Setting Up Clerk

1. **Install Clerk dependencies**:

   To use Clerk for authentication, install the necessary packages:

   ```bash
   npm install @clerk/clerk-react @clerk/clerk-sdk
   ```

2. **Create a Clerk Account**:

   Go to [Clerk](https://clerk.dev/) and sign up for an account. After logging in, create a new application, and note down your **Clerk API keys** (`Clerk Frontend API` and `Clerk API Key`).

3. **Configure Clerk**:

   In your project, create a `.env` file at the root of your project and add the following Clerk configuration:

   ```env
   VITE_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   VITE_CLERK_API_KEY=<your-clerk-api-key>
   ```

4. **Wrap your application with ClerkProvider**:

   In your `src/main.tsx` (or `src/index.tsx`), wrap your application with the `ClerkProvider` and configure it with your Clerk frontend API:

   ```tsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import { ClerkProvider, RedirectToSignIn, RedirectToHome, useUser } from '@clerk/clerk-react'
   import App from './App'
   import './index.css'

   const clerkFrontendApi = import.meta.env.VITE_CLERK_FRONTEND_API

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <ClerkProvider frontendApi={clerkFrontendApi}>
       <App />
     </ClerkProvider>
   )
   ```

5. **Using Clerk Authentication**:

   - To sign in, use the `SignInButton` and `SignOutButton` from Clerk.
   - Use the `UserButton` to display the user's information or a button to sign out.

   Example usage in `src/components/Header.tsx`:

   ```tsx
   import { Link } from 'react-router-dom'
   import { ShoppingCartIcon } from '@heroicons/react/24/outline'
   import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
   import { useCart } from '../context/CartContext'
   import SearchBar from './SearchBar'

   export default function Header() {
     const { items } = useCart()

     return (
       <header className="bg-white shadow-sm">
         <div className="container mx-auto px-4 py-4">
           <div className="flex items-center">
             <Link to="/" className="text-xl font-bold text-gray-800">
               ShopXpress
             </Link>
             
             <SearchBar />

             <nav className="flex items-center space-x-6">
               <Link to="/products" className="text-gray-600 hover:text-gray-900">
                 Products
               </Link>
               <Link to="/cart" className="relative">
                 <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                 {items.length > 0 && (
                   <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                     {items.length}
                   </span>
                 )}
               </Link>
               <SignedIn>
                 <UserButton afterSignOutUrl="/" />
               </SignedIn>
               <SignedOut>
                 <SignInButton mode="modal" />
               </SignedOut>
             </nav>
           </div>
         </div>
       </header>
     )
   }
   ```

6. **Sign In / Sign Out**:

   - The `SignInButton` allows the user to sign in via a modal.
   - The `UserButton` provides a UI for signed-in users, allowing them to sign out.
   - You can also access user information using `useUser()` from Clerk:

   ```tsx
   import { useUser } from '@clerk/clerk-react'

   const UserProfile = () => {
     const { user } = useUser()
     return <div>Welcome, {user?.fullName}</div>
   }
   ```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend expanding your ESLint configuration to enable type-aware lint rules. To do so, follow these steps:

1. **Configure the `parserOptions`**:

In your ESLint configuration, update the `parserOptions` to point to your TypeScript configuration files:

```js
// eslint.config.js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. **Use Type-aware Lint Rules**:

Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked` to enable stricter type checking rules.

You can also optionally add `...tseslint.configs.stylisticTypeChecked` for stricter stylistic checks.

3. **Install React ESLint Plugin**:

To enable React-specific lint rules, you need to install `eslint-plugin-react`:

```bash
npm install eslint-plugin-react --save-dev
```

Then, update your ESLint configuration:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the React version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the React plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Scripts

- **`npm run dev`**: Start the development server with HMR enabled.
- **`npm run build`**: Build the project for production.
- **`npm run lint`**: Run ESLint to check for code quality issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Summary of Changes:
1. **Clerk Setup**:
   - Instructions for installing Clerk dependencies (`@clerk/clerk-react` and `@clerk/clerk-sdk`).
   - Added `.env` configuration for Clerk API keys.
   - Wrapped the app with `ClerkProvider` to enable Clerk's functionality.
   - Example usage of `SignedIn`, `SignedOut`, `SignInButton`, and `UserButton` for managing user authentication.

2. **Clerk Authentication**:
   - Integrated Clerk’s authentication (sign-in and user profile) into the app, providing easy user management.

3. **Scripts and Linting**:
   - Added instructions on how to set up ESLint for production applications with type-aware lint rules.
#   S h o p X p r e s s  
 