'use client';

// type Profile = {
//   id: string;
//   Name: string;
//   Email: string;
//   // match your fields above
// };

export default function ProfilesComponent({ profiles }: { profiles: Profile[] }) {
  return (
    <main>
      <h1>Profiles</h1>
      {profiles.map(profile => (
        <div key={profile.id}>
          {/* <h2>{profile.Name}</h2>
          <p>{profile.Email}</p> */}
        </div>
      ))}
    </main>
  );
}