export default function SkyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50" />

      {/* Soft cloud overlays */}
      <svg
        className="absolute -top-10 -left-20 w-[600px] h-[300px] opacity-60 blur-2xl"
        viewBox="0 0 600 300"
        fill="none"
      >
        <ellipse cx="200" cy="150" rx="180" ry="80" fill="white" />
        <ellipse cx="320" cy="130" rx="140" ry="70" fill="white" />
        <ellipse cx="420" cy="160" rx="160" ry="75" fill="white" />
      </svg>

      <svg
        className="absolute top-32 -right-32 w-[500px] h-[250px] opacity-50 blur-3xl"
        viewBox="0 0 500 250"
        fill="none"
      >
        <ellipse cx="180" cy="120" rx="150" ry="65" fill="white" />
        <ellipse cx="300" cy="100" rx="120" ry="55" fill="white" />
      </svg>

      <svg
        className="absolute bottom-20 left-1/4 w-[700px] h-[200px] opacity-40 blur-3xl"
        viewBox="0 0 700 200"
        fill="none"
      >
        <ellipse cx="250" cy="100" rx="200" ry="70" fill="white" />
        <ellipse cx="450" cy="90" rx="180" ry="60" fill="white" />
      </svg>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />
    </div>
  );
}
