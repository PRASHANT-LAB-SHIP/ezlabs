export default function Preloader() {
  return (
    <div className="preloader" aria-hidden>
      <div className="text-center">
        <div className="mb-4 animate-spin">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25"/><path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
        </div>
        <div className="text-sm">Preparing the experience...</div>
      </div>
    </div>
  );
}
