type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionWrapper({
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section className="border border-gray-300 rounded-lg p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </section>
  );
}
