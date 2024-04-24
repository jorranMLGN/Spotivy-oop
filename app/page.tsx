"use client";

import { trpc } from "@/server/client";
  import {Button} from "@nextui-org/button";

export default function Home() {
  const users = trpc.users.get.useQuery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(users.data)}
      <Button>Click me</Button>
    </main>
  );
}
