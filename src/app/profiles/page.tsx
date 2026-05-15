
import Logoutbutton from './logout-btn';
import ProfilesComponent from './profiles-component';
import fetchAirtableRecords from '@/lib/airtable';

export const dynamic = 'force-dynamic'; // already have this from auth

export default async function ProfilesPage() {
  
  try {
    const records = await fetchAirtableRecords<Profile>(
      process.env.AIRTABLE_TABLE_NAME!
    );
    const profiles = records.map(r => ({
      ...r.fields,
    }));
  return (
    <main>
      <h1>42 Students Profiles</h1>
      <p>Only accessible with the correct password.</p>
      <Logoutbutton />
      <ProfilesComponent profiles={profiles} />
    </main>);
  }
  catch(error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error:", error);
    }
    return (
      <div><p>Fetch failed</p></div>
    )
  }

}