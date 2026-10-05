"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SitesShadcnRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/shadcn");
  }, [router]);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-16 text-center text-sm text-muted-foreground">
      Redirecting to /shadcn...
    </div>
  );
}
