"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type FeedbackStateProps = {
  title: string;
  description: string;
  variant?: "error" | "not-found";
  onRetry?: () => void;
};

export const FeedbackState = ({
  title,
  description,
  variant = "error",
  onRetry,
}: FeedbackStateProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isNotFound = variant === "not-found";

  const retry = () => {
    startTransition(() => {
      onRetry?.();
      router.refresh();
    });
  };

  return (
    <section className="feedback-page" aria-labelledby="feedback-title">
      <div className="feedback-card">
        <div className="feedback-illustration" aria-hidden="true">
          <span className="feedback-orbit feedback-orbit--outer" />
          <span className="feedback-orbit feedback-orbit--inner" />
          <svg width="108" height="88" viewBox="0 0 108 88" fill="none">
            <rect x="9" y="8" width="90" height="66" rx="12" fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeWidth="1.8" />
            <path d="M9 26h90M43 83h22M54 74v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="20" cy="17" r="2" fill="currentColor" />
            <circle cx="28" cy="17" r="2" fill="currentColor" fillOpacity=".5" />
            <circle cx="36" cy="17" r="2" fill="currentColor" fillOpacity=".3" />
            {isNotFound ? (
              <path d="M47 43a7 7 0 1 1 10 6c-3 1-3 4-3 6m0 7h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="m40 43 28 18M40 61l7-5m14-8 7-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="54" cy="52" r="2.5" fill="currentColor" />
              </>
            )}
          </svg>
          <span className="feedback-symbol">{isNotFound ? "404" : "!"}</span>
        </div>
        <span className="feedback-eyebrow">{isNotFound ? "صفحه‌ای با این آدرس نداریم" : "یک وقفهٔ کوتاه"}</span>
        <h1 id="feedback-title">{title}</h1>
        <p className="feedback-description">{description}</p>
        <div className="feedback-actions">
          {!isNotFound && (
            <button type="button" className="shell-button shell-button--primary" onClick={retry} disabled={isPending} aria-busy={isPending}>
              <svg className={isPending ? "is-spinning" : undefined} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 7v5h-5M4 17v-5h5" />
                <path d="M6.1 7a7 7 0 0 1 11.6-1L20 9M4 15l2.3 3A7 7 0 0 0 17.9 17" />
              </svg>
              {isPending ? "در حال تلاش…" : "تلاش دوباره"}
            </button>
          )}
          <Link href="/" className={"shell-button " + (isNotFound ? "shell-button--primary" : "shell-button--secondary")}>
            صفحهٔ اصلی
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
          </Link>
        </div>
        <p className="feedback-note">{isNotFound ? "از منوی بالا هم می‌توانید مسیرتان را پیدا کنید." : "در صورت ادامهٔ مشکل، چند دقیقهٔ دیگر دوباره سر بزنید."}</p>
      </div>
    </section>
  );
};
