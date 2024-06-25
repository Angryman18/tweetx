import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useStore from "./useStore";
import { ROUTES } from "@/constants/router";

export default function useAuthRedirect() {
  const router = useRouter();
  const { retrieve } = useStore();

  useEffect(() => {
    const isUserLoggedIn = retrieve("user");
    if (isUserLoggedIn) router.push(ROUTES.Feed);
    else router.push(ROUTES.Login);
  }, [router, retrieve]);
}
