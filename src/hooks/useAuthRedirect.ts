import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ROUTES } from "@/constants/router";
import { usePathname } from "next/navigation";

const unRestrictedRoutes = [ROUTES.Signup, ROUTES.Login, ROUTES.Home];
const protectedPages = [ROUTES.Feed, ROUTES.Profile, ROUTES.Users];

export default function useAuthRedirect() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isValidUser, setIsValidUser] = useState(false);
  
  const isProtectedPages = protectedPages.includes(pathname as ROUTES);
  const except = pathname !== ROUTES.Signup;

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    const isValidUserData = !["null", "undefined", null].includes(getUser);
    setIsValidUser(isValidUserData);
    setLoading(false);
    if (!isValidUserData && except) {
      router.push(ROUTES.Login);
    } else if (isValidUserData && unRestrictedRoutes.includes(pathname as ROUTES)) {
      router.push(ROUTES.Feed);
    }
  }, [router, except, pathname]);

  return loading ? (isProtectedPages ? false : loading) : isValidUser;
}
