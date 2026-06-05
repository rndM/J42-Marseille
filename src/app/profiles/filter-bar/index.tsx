'use client';

export const SKILL_OPTIONS = [
  'Chef(fe) de projet',
  'DevOps/Cloud/Admin système et reseaux',
  'Développeur frontend',
  'Développeur backend',
  'Cybersécurité',
  'UX/UI/Graphisme',
  'Data / IA',
  'Game Developer',
] as const;

export type SkillOption = (typeof SKILL_OPTIONS)[number];

export interface FilterState {
  mastered: SkillOption[];
  toDevelop: SkillOption[];
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (next: FilterState) => void;
}

function SkillToggle({
  label,
  active,
  variant,
  onToggle,
}: {
  label: string;
  active: boolean;
  variant: 'mastered' | 'toDevelop';
  onToggle: () => void;
}) {
  const base =
    'inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border cursor-pointer select-none transition-all duration-150';

  const styles = {
    mastered: active
      ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
      : 'bg-white text-teal-700 border-teal-300 hover:bg-teal-50',
    toDevelop: active
      ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
      : 'bg-white text-amber-700 border-amber-300 hover:bg-amber-50',
  };

  return (
    <button type="button" className={`${base} ${styles[variant]}`} onClick={onToggle}>
      {active && (
        <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {label}
    </button>
  );
}

export function FilterBar({ filters, onChange }: FilterBarProps) {
  function toggleMastered(skill: SkillOption) {
    const next = filters.mastered.includes(skill)
      ? filters.mastered.filter((s) => s !== skill)
      : [...filters.mastered, skill];
    onChange({ ...filters, mastered: next });
  }

  function toggleToDevelop(skill: SkillOption) {
    const next = filters.toDevelop.includes(skill)
      ? filters.toDevelop.filter((s) => s !== skill)
      : [...filters.toDevelop, skill];
    onChange({ ...filters, toDevelop: next });
  }

  const hasActive = filters.mastered.length > 0 || filters.toDevelop.length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl pt-5 px-12 pb-10 mb-6 flex flex-col gap-4">
      {/* Mastered */}
      <h3 className="text-lg text-center text-gray-500 uppercase tracking-widest font-medium">
        Filters
      </h3>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
          <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">
            Mastered skills
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {SKILL_OPTIONS.map((skill) => (
            <SkillToggle
              key={skill}
              label={skill}
              active={filters.mastered.includes(skill)}
              variant="mastered"
              onToggle={() => toggleMastered(skill)}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100 my-4" />

      {/* To develop */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
          <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">
            Skills to develop
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {SKILL_OPTIONS.map((skill) => (
            <SkillToggle
              key={skill}
              label={skill}
              active={filters.toDevelop.includes(skill)}
              variant="toDevelop"
              onToggle={() => toggleToDevelop(skill)}
            />
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasActive && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => onChange({ mastered: [], toDevelop: [] })}
            className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}