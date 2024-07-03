import { useEffect } from "react";

import { useRouter } from "next/router";

import { Layout } from "@/shared/components";

import { useUserQuery } from "@/shared/generated";

import { StorageService } from "@/shared/services";

export default function Home() {
  const router = useRouter();

  const { loading, error, data: { user } = {} } = useUserQuery();

  useEffect(() => {
    const token = StorageService.getAuthToken();

    if (!token) router.push("/login");
  }, [router]);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      {user && (
        <div>
          <h2>
            Hola: {user.firstName} {user.lastName}
          </h2>
        </div>
      )}
    </Layout>
  );
}
