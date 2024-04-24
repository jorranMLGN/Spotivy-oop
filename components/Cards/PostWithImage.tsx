import { Avatar, Button,Image  } from "@nextui-org/react";
import {
  CalendarDaysIcon,
  GlobeIcon,
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  SeparatorHorizontal,
  ShareIcon
} from "lucide-react";

export default function PostWithImage() {
return(
  <div className="bg-white rounded-lg shadow-md p-6 grid gap-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <Image alt="John Doe" src="https://randomuser.me" width={40} height={40} />

        </Avatar>
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Studying Computer Science</p>
        </div>
      </div>
      <Button className="rounded-full"  variant="ghost">
        <MoreHorizontalIcon className="h-5 w-5"/>
        <span className="sr-only">More options</span>
      </Button>
    </div>
    <div>
      <img
        alt="Post Image"
        className="rounded-lg w-full aspect-[16/9] object-cover"
        height={450}
        src="/placeholder.svg"
        width={800}
      />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button  variant="ghost">
          <HeartIcon className="h-5 w-5"/>
          <span className="sr-only">Like</span>
        </Button>
        <Button variant="ghost">
          <MessageCircleIcon className="h-5 w-5"/>
          <span className="sr-only">Comment</span>
        </Button>
        <Button  variant="ghost">
          <ShareIcon className="h-5 w-5"/>
          <span className="sr-only">Share</span>
        </Button>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">10 likes • 5 comments</div>
    </div>
    <div className="space-y-2">
      <div className="font-semibold">John Doe</div>
      <p>Sharing my study tips for acing the upcoming exam! Let me know if you have any questions.</p>
    </div>
    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex items-center gap-1">
        <CalendarDaysIcon className="h-4 w-4"/>
        <span>2 hours ago</span>
      </div>
      <SeparatorHorizontal orientation="vertical"/>
      <div className="flex items-center gap-1">
        <GlobeIcon className="h-4 w-4"/>
        <span>Netherlands</span>
      </div>
    </div>
  </div>
)
};