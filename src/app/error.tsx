"use client";

import { FeedbackState } from "./_components/feedback-state/feedback-state";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <FeedbackState
      title="نمایش این صفحه با مشکل روبه‌رو شد"
      description="مشکلی موقت پیش آمده است. دوباره تلاش کنید یا از صفحهٔ اصلی ادامه دهید."
      onRetry={reset}
    />
  );
}
