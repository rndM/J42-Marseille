
'use client';

import { useRouter } from 'next/navigation';
import ProfilesComponent from './profiles-component';
import { fetchAirtableRecords } from '@/lib/airtable';

// Define your fields based on your Airtable schema
type Profile = {
  Name: string;
  Email: string;
  // add your actual fields here
};

export const dynamic = 'force-dynamic'; // already have this from auth

export default async function ProfilesPage() {
  const router = useRouter();
  async function handleLogout() {
    await fetch('/api/logout', { method: 'POST' });
    router.replace('/login');
  }

  const records = await fetchAirtableRecords<Profile>(
    process.env.AIRTABLE_TABLE_NAME!
  );

  const profiles = records.map(r => ({
    id: r.id,
    ...r.fields,
  }));

  return (
    <main>
      <h1>42 Students Profiles</h1>
      <p>Only accessible with the correct password.</p>
      <button onClick={handleLogout}>Log out</button>
      <ProfilesComponent profiles={profiles} />
    </main>);
}