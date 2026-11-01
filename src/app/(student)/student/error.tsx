"use client";

import { FeedbackState } from "@/app/_components/feedback-state/feedback-state";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <FeedbackState
      title="دریافت اطلاعات حساب با مشکل روبه‌رو شد"
      description="در حال حاضر امکان نمایش این بخش وجود ندارد. لطفاً دوباره تلاش کنید."
      onRetry={reset}
    />
  );
}
