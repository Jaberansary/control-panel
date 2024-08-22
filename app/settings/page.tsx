"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Menu from '../components/Menu';

export default function SettingsPage() {
  const router = useRouter();
  const userHasAccess = true; 

  useEffect(() => {
    if (!userHasAccess) {
      router.push('/list');
    }
  }, [userHasAccess, router]);

  if (!userHasAccess) return null;

  return (
    <main className="flex">
      <Menu canAccessSettings={userHasAccess} />
      <div className="flex-1 p-4">
        <h2>Settings</h2>
        <p>Settings content goes here...</p>
      </div>
    </main>
  );
}
