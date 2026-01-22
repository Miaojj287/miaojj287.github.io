
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-8">
      <Link href="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold">About Detailed</h1>
      <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
        This is a separate page to demonstrate Next.js App Router capabilities.
      </p>
    </div>
  );
}
