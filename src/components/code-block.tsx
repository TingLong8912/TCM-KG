"use client";

import { useUser } from '@clerk/nextjs';

export default function CodeBlock() {
  const { isSignedIn, user } = useUser();
  
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
      <a
        href={isSignedIn ? "/dashboard" : "/signin"}
        className="border border-input rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm"
      >
        立即前往
      </a>
      <a href="/introduction" className="text-sm font-semibold leading-6">
        了解更多 <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
