
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
    <main className='pt-8'>
      <h1 className='text-3xl font-semibold text-center'>42 Students Profiles</h1>
      <div className='w-full grid place-items-center mt-8'>
        <Logoutbutton className='cursor-pointer' />
      </div>
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