export default function SectionHeader({ title, children }) {
  return (
    <>
      <h2 className="font-bold text-center text-4xl md:text-6xl py-10 px-2">
        {title}
      </h2>
      <p className="pb-10 px-2 text-center max-w-sm md:max-w-lg lg:max-w-screen-lg m-auto">
        {children}
      </p>
    </>
  );
}
