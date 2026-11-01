"use client";

import { logout } from "@/actions/auth";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HeaderUserSection = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [signOutState, action] = useFormState(logout, undefined);

  useEffect(() => {
    if (signOutState?.isSuccess) {
      void getSession().then(() => {
        router.push("/");
        router.refresh();
      });
    }
  }, [signOutState, router]);

  return (
    <div className="site-account">
      {session?.user ? (
        <>
          <Link href="/student/courses" className="site-account__profile">
            <span dir="ltr">{session.user.mobile || "حساب کاربری"}</span>
          </Link>
          <form action={action as () => void}>
            <LogoutButton />
          </form>
        </>
      ) : (
        <Link href="/signin" className="site-account__signin">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M4 12h11m-4-4 4 4-4 4" />
          </svg>
          ورود / ثبت‌نام
        </Link>
      )}
    </div>
  );
};

const LogoutButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="site-account__logout" disabled={pending} aria-busy={pending}>
      {pending ? "در حال خروج…" : "خروج"}
    </button>
  );
};

export default HeaderUserSection;
