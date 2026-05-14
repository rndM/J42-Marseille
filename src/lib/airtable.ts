export type AirtableRecord<T> = {
  id: string;
  fields: T;
  createdTime: string;
};

export async function fetchAirtableRecords<T>(table: string): Promise<AirtableRecord<T>[]> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;

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