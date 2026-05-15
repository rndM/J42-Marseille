'use client';

// type Profile = {
//   id: string;
//   Name: string;
//   Email: string;
//   // match your fields above
// };

export default function ProfilesComponent({ profiles }: { profiles: Profile[] }) {
  console.log(profiles)
  return (
    <main>
      <h1>Profiles</h1>
      {profiles.map((profile, idx) => (
        <div key={String(idx)}>
          <p>{profile.Title}</p>
          <p>{profile.Description}</p>
          <p>{profile.Owner}</p>
          <p>{profile.Status}</p>
          <p>{profile.Category}</p>
        </div>
      ))}
    </main>
  );
}