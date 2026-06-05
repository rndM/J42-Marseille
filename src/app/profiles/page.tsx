
import Logoutbutton from './logout-btn';
import ProfilesComponent from './profiles-component';
import fetchAirtableRecords from '@/lib/airtable';
import GeneralHeader from '@/components/general-header';
import GeneralFooter from '@/components/general-footer';

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
      <>
          <GeneralHeader />
            <main className='min-h-screen px-4 py-10 mt-16'>
                <div className='max-w-6xl mx-auto'>

                    {/* Header section */}
                    <div className='flex items-center justify-between mb-10'>
                    <h1 className='text-3xl font-semibold tracking-tight'>
                        42 Students Profiles
                    </h1>
                    <Logoutbutton className='cursor-pointer' />
                    </div>

                    {/* Profiles */}
                    <ProfilesComponent profiles={profiles} />

                </div>
            </main>
            <GeneralFooter />
        </>
    );
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