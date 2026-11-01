import Image from "next/image";
import Link from "next/link";
import { TopNavigation } from "./top-navigation";
import HeaderUserSection from "./header-user-section";

export const Header = () => (
  <header className="site-header">
    <div className="site-container site-header__inner">
      <Link href="/" className="site-brand" aria-label="زرنگو؛ صفحه اصلی">
        <Image
          src="/images/logo-light.svg"
          width={180}
          height={36}
          priority
          alt="زرنگو"
        />
      </Link>
      <TopNavigation />
      <HeaderUserSection />
    </div>
  </header>
);
