export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-600">
    {children}
  </span>
);
