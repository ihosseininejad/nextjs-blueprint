import Image from "next/image";

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-container auth-shell">
      <section className="auth-form">{children}</section>
      <aside className="auth-aside">
        <span className="auth-aside__eyebrow">همراه مسیر یادگیری شما</span>
        <h2>قدم بعدی، از اینجا شروع می‌شه.</h2>
        <Image src="/images/programmer.svg" width={280} height={280} alt="" />
        <p>آموزش کاربردی برنامه‌نویسی،<br />با یک مسیر روشن و قدم‌های پیوسته.</p>
      </aside>
    </div>
  );
}
