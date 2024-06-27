import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ROUTES } from "@/constants/router";
import { usePathname } from "next/navigation";

export default function useAuthRedirect() {
  const getUser = localStorage.getItem("user");
  const pathname = usePathname();
  const isValidUserData = !["null", "undefined", null].includes(getUser);
  const router = useRouter();
  const except = pathname !== ROUTES.Signup;

  useEffect(() => {
    if (!isValidUserData && except) {
      router.push(ROUTES.Login);
    } else if (isValidUserData && (pathname === ROUTES.Signup || pathname === ROUTES.Login)) {
      router.push(ROUTES.Feed);
    }
  }, [router, isValidUserData, except, pathname]);

  return isValidUserData;
}
