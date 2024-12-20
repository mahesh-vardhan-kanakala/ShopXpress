import {  useAuth } from "@clerk/clerk-react";

export default function AuthButtons() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return null;
  }

  return (
    <div className="mb-12 space-y-4">
    </div>
  );
}