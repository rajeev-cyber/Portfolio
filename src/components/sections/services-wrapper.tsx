"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the Services component with no SSR
const Services = dynamic(() => import('./services').then(mod => mod.Services), {
  ssr: false,
});

export function ServicesWrapper() {
  return (
    <Suspense 
      fallback={
        <div className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 w-64 bg-foreground/10 rounded mx-auto mb-4" />
              <div className="h-4 w-96 bg-foreground/10 rounded mx-auto mb-16" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-border bg-card">
                    <div className="w-12 h-12 bg-foreground/10 rounded mb-4" />
                    <div className="h-6 w-32 bg-foreground/10 rounded mb-2" />
                    <div className="h-4 w-full bg-foreground/10 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <Services />
    </Suspense>
  );
} 