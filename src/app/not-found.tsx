import { FeedbackState } from "./_components/feedback-state/feedback-state";

export default function NotFound() {
  return (
    <FeedbackState
      variant="not-found"
      title="این صفحه پیدا نشد"
      description="ممکن است آدرس تغییر کرده باشد یا صفحه دیگر در دسترس نباشد. از صفحهٔ اصلی دوباره شروع کنید."
    />
  );
}
