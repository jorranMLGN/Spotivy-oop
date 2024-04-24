"use client";
import { trpc } from "@/server/client";
import Nav from "@/components/Navbar";

export default function Home() {
  const users = trpc.users.get.useQuery();

  return (
    <>

    <main className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-5xl font-semibold">Welcome to Next.js + NextUI</h1>
      </header>
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-9xl font-semibold">Posts</h2>
        <div className="grid gap-4">
            <div>
              {users.data?.map((user) => (
                <div key={user.id}>
                  {user.name}
                </div>
              ))}
            </div>
        </div>
      </div>
    </main>
    </>

);
}
