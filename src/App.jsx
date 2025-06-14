import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { useEffect, useRef } from 'react';

function App() {
  const { isSignedIn, user } = useUser();
  const postedRef = useRef(false);

  useEffect(() => {
    if (isSignedIn && user && !postedRef.current) {
      fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clerkId: user.id,
          email: user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress || '',
        }),
      })
        .then(res => res.json())
        .then(() => { postedRef.current = true; })
        .catch(() => {});
    }
  }, [isSignedIn, user]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="w-full flex items-center justify-between px-8 py-4 shadow bg-white">
        <div className="font-bold text-2xl">My App</div>
        <div className="flex items-center gap-4">
          {!isSignedIn ? (
            <>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Sign Up</button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="px-4 py-2 rounded bg-gray-200 text-gray-900 hover:bg-gray-300 transition">Log In</button>
              </SignInButton>
            </>
          ) : (
            <>
              <span className="mr-2">Hello, {user?.firstName || user?.username || 'User'}!</span>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
      </header>
      <main className="w-full max-w-2xl mx-auto mt-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
        <p className="text-lg">Welcome to your app. MongoDB connection and test fetch will be added next.</p>
      </main>
    </div>
  );
}

export default App;