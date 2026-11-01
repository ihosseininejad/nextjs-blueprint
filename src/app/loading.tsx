export default function Loading() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      <span className="shell-spinner" aria-hidden="true" />
      <p>در حال آماده‌سازی صفحه…</p>
    </div>
  );
}
