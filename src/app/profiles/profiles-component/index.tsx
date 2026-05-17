'use client';

const tags = (csv: string | undefined) =>
  csv?.split(',').map((s) => s.trim()).filter(Boolean) ?? [];

const initials = (first: string, last: string) =>
  `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase();

function capitalizeFirstLetter(string: string) {
  return [...string][0].toUpperCase() + [...string].slice(1).join('')
}

function Tag({ label, variant = 'default' }: { label: string; variant?: 'skill' | 'soft' | 'todo' | 'default' }) {
  const styles: Record<string, string> = {
    skill: 'bg-teal-50 text-teal-800 border-teal-300',
    soft:  'bg-purple-50 text-purple-800 border-purple-300',
    todo:  'bg-amber-50 text-amber-800 border-amber-300',
    default: 'bg-gray-100 text-gray-600 border-gray-200',
  };
  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded-full border mr-1 mb-1 ${styles[variant]}`}>
      {label}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isActive = status?.toLowerCase() === 'active';
  if (status == '')
    status = 'N/A'
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
      isActive ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-green-600' : 'bg-amber-600'}`} />
      {status}
    </span>
  );
}

export function ProfileCard({ profile }: { profile: Profile }) {
  const masteredSkills  = tags(profile.MasteredSkills);
  const otherSkills     = tags(profile.OtherSkills);
  const skillsToDevelop = tags(profile.SkillsToDevelop);
  const softSkills      = tags(profile.SoftSkills);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 grid grid-cols-[1fr_1.4fr] gap-6">

      {/* LEFT COLUMN */}
      <div className="border-r border-gray-100 pr-6 flex flex-col">

        {/* Avatar + name */}
        <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-sm font-medium text-purple-800 mb-3 shrink-0">
          {initials(profile.FirstName, profile.LastName)}
        </div>
        <p className="text-base font-medium text-gray-900 leading-tight">
          {capitalizeFirstLetter(profile.FirstName)} {profile.LastName.toUpperCase()}
        </p>
        <p className="text-sm text-gray-400 mt-0.5 mb-4">Level 42: {profile.Level42}</p>

        <hr className="border-gray-100 mb-4" />

        {/* Meta table */}
        <table className="w-full text-sm border-collapse mb-4">
          <tbody>
            <tr>
              <td className="text-gray-400 py-1">Status</td>
              <td className="text-right py-1">
                <StatusBadge status={profile.Status} />
              </td>
            </tr>
            <tr>
              <td className="text-gray-400 py-1">Frequency</td>
              <td className="text-right text-gray-600 py-1">{profile.Frequency}</td>
            </tr>
            <tr>
              <td className="text-gray-400 py-1">English</td>
              <td className="text-right text-gray-600 py-1">
                {profile.EnglishLevel}
                {profile.EnglishCertification ? ` — ${profile.EnglishCertification}` : ''}
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="border-gray-100 mb-4" />

        {/* Links */}
        <div className="flex flex-col gap-1.5 mt-auto">
          {profile.Linkedin && (
            <a
              href={profile.Linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          )}
          {profile.PortfolioLink && (
            <a
              href={profile.PortfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
              Portfolio
            </a>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-4">
        {masteredSkills.length > 0 && (
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1.5">Mastered skills</p>
            <div>{masteredSkills.map((s) => <Tag key={s} label={s} variant="skill" />)}</div>
          </div>
        )}
        {otherSkills.length > 0 && (
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1.5">Other skills</p>
            <div>{otherSkills.map((s) => <Tag key={s} label={s} variant="default" />)}</div>
          </div>
        )}
        {skillsToDevelop.length > 0 && (
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1.5">To develop</p>
            <div>{skillsToDevelop.map((s) => <Tag key={s} label={s} variant="todo" />)}</div>
          </div>
        )}
        {softSkills.length > 0 && (
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1.5">Soft skills</p>
            <div>{softSkills.map((s) => <Tag key={s} label={s} variant="soft" />)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// Grid wrapper — drop this in your profiles page
export default function ProfilesComponent({ profiles }: { profiles: Profile[] }) {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-medium text-gray-900 mb-6">Profiles</h1>
      <div className="flex flex-col gap-8">
        {profiles.map((profile) => (
          <ProfileCard key={`${profile.FirstName}-${profile.LastName}`} profile={profile} />
        ))}
      </div>
    </main>
  );
}