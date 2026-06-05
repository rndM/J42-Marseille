That's the right approach. Here's the complete code:

**`.env.local`**
```
AIRTABLE_ACCESS_TOKEN=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=your_table_name_here
```

---

**`src/lib/airtable.ts`** — reusable fetch function:
```ts
export type AirtableRecord<T> = {
  id: string;
  fields: T;
  createdTime: string;
};

export async function fetchAirtableRecords<T>(table: string): Promise<AirtableRecord<T>[]> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiKey = process.env.AIRTABLE_ACCESS_TOKEN;

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      next: { revalidate: 60 }, // cache for 60 seconds, or use 0 to always fetch fresh
    }
  );

  if (!res.ok) {
    throw new Error(`Airtable fetch failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.records;
}
```

---

**`src/app/profiles/page.tsx`** — server component fetches, passes to client:
```tsx
import ProfilesClient from './ProfilesClient';
import { fetchAirtableRecords } from '@/lib/airtable';

// Define your fields based on your Airtable schema
type Profile = {
  Name: string;
  Email: string;
  // add your actual fields here
};

export const dynamic = 'force-dynamic'; // already have this from auth

export default async function ProfilesPage() {
  const records = await fetchAirtableRecords<Profile>(
    process.env.AIRTABLE_TABLE_NAME!
  );

  const profiles = records.map(r => ({
    id: r.id,
    ...r.fields,
  }));

  return <ProfilesClient profiles={profiles} />;
}
```

---

**`src/app/profiles/ProfilesClient.tsx`** — client component that uses the data:
```tsx
'use client';

type Profile = {
  id: string;
  Name: string;
  Email: string;
  // match your fields above
};

export default function ProfilesClient({ profiles }: { profiles: Profile[] }) {
  return (
    <main>
      <h1>Profiles</h1>
      {profiles.map(profile => (
        <div key={profile.id}>
          <h2>{profile.Name}</h2>
          <p>{profile.Email}</p>
        </div>
      ))}
    </main>
  );
}
```

---

The key things to note:

- The API key lives only in the server component — never sent to the browser
- `next: { revalidate: 60 }` caches the Airtable response for 60 seconds so you're not hammering the API on every request — set to `0` if you always want fresh data
- Just update the `Profile` type to match your actual Airtable column names exactly (they are case-sensitive)
- Your Airtable Base ID is in the URL when you open your base: `airtable.com/YOUR_BASE_ID/...`