"use client";
import 'react-h5-audio-player/lib/styles.css';

import { trpc } from "@/server/client";
  import {Button} from "@nextui-org/button";
import {Player} from "@/components/Widgets/AudioPlayer";

export default function Home() {
  const users = trpc.users.get.useQuery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(users.data)}
      <Player autoPlay src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </main>
  );
}
