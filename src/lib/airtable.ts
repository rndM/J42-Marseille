export type AirtableRecord<T> = {
  id: string;
  fields: T;
  createdTime: string;
};

export default async function fetchAirtableRecords<T>(table: string): Promise<AirtableRecord<T>[]> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const accessToken = process.env.AIRTABLE_ACCESS_TOKEN;
	console.log("baseId:", baseId);
  console.log("token starts with:", accessToken?.slice(0, 6));
  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 3600 }, // cache for 60 seconds, or use 0 to always fetch fresh
    }
  );

  if (!res.ok) {
    throw new Error(`Airtable fetch failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
	console.log(data)
  return data.records;
}