// app/layouts/TwoColumnLayout.tsx
export default function TwoColumnLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">{left}</div>
      <div className="lg:col-span-1">{right}</div>
    </div>
  );
}
