import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <footer className="site-footer">
    <div className="site-container site-footer__grid">
      <div className="site-footer__brand">
        <Link href="/" aria-label="زرنگو؛ صفحه اصلی">
          <Image src="/images/logo-en-light.svg" width={180} height={36} alt="زرنگو" />
        </Link>
        <p>یادگیری مداوم، پیشرفت مستمر.<br />همراه مسیر برنامه‌نویسی شما.</p>
      </div>
      <nav className="site-footer__links" aria-label="یادگیری">
        <h2>مسیر یادگیری</h2>
        <Link href="/courses">دوره‌های آموزشی</Link>
        <Link href="/blog">مطالب و مقالات</Link>
        <Link href="/">صفحهٔ اصلی</Link>
      </nav>
      <nav className="site-footer__links" aria-label="حساب کاربری">
        <h2>همراه زرنگو</h2>
        <Link href="/signin">ورود و ثبت‌نام</Link>
        <Link href="/student/courses">دوره‌های من</Link>
        <Link href="/student/profile">حساب کاربری</Link>
      </nav>
    </div>
    <div className="site-container site-footer__bottom">
      <p>© {new Date().getFullYear()} زرنگو. تمامی حقوق محفوظ است.</p>
      <span>ساخته‌شده برای یادگیری و رشد</span>
    </div>
  </footer>
);
