import {CheckCircle2} from 'lucide-react';

export function ChecklistItem({children}: {children: React.ReactNode}) {
  return (
    <li className="paper-sheet flex gap-3 rounded-2xl border border-white/80 p-4 shadow-sm">
      <CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={20} aria-hidden="true" />
      <span className="leading-6 text-ink/78">{children}</span>
    </li>
  );
}
