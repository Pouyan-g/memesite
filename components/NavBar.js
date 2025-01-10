import React from "react";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import styled from "styled-components";
import { IoMdCloudUpload } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Data = [
  {
    title: "Treding",
    desc: "A trending tag meme is a viral challenge or topic that spreads quickly across social media using a specific hashtag. Users participate by sharing content or humor related to the tag.",
    link: "/treding",
    id: "1",
  },
  {
    title: "Darkness",
    desc: "A darkness meme humorously explores themes of deep or existential darkness, often using contrast or absurdity. It typically features dark or brooding visuals with ironic or witty captions.",
    link: "/dark",
    id: "2",
  },
  {
    title: "Nsfw",
    desc: "NSFW memes contain explicit or adult content, often intended for mature audiences. They use humor or shock value to explore taboo or inappropriate topics.",
    link: "/nsfw",
    id: "3",
  },
  {
    title: "Classics",
    desc: "The Classics meme references popular and nostalgic elements from past pop culture, often with a humorous or exaggerated twist.",
    link: "/classic",
    id: "4",
  },
];

const Component = () => {
  return Data.map((d) => {
    // console.log(d.title);
    return (
      <li key={d.id}>
        <NavigationMenuLink
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href={d.link}
        >
          <div className="text-sm font-medium leading-none">{d.title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {d.desc}
          </p>
        </NavigationMenuLink>
      </li>
    );
  });
};

const UploadButtonNavBar = () => {
  return (
    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >
          <IoMdCloudUpload />
          <div className="mb-2 mt-4 text-lg font-medium">Upload your meme</div>
          <p className="text-sm leading-tight text-muted-foreground">
            Upload your meme to share a laugh and spread the fun with friends!
          </p>
        </NavigationMenuLink>
      </li>
      <li className="row-span-3">
        <NavigationMenuLink
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >
          <IoIosCreate />
          <div className="mb-2 mt-4 text-lg font-medium">Create your meme</div>
          <p className="text-sm leading-tight text-muted-foreground">
            Create a new meme to share with the community!
          </p>
        </NavigationMenuLink>
      </li>
    </ul>
  );
};

const Wrapper = styled.div`
  display: flex;
  color: white;
  background-color: #ad4294;
  height: 45px;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  top: 0;
`;

const Logo = styled.p`
  user-select: none;
  margin: 15px;
`;

const Buttons = styled.div`
  color: white;
  flex: 2;
`;
function NavBar() {
  return (
    <Wrapper>
      <Logo>MemeHub</Logo>
      <Buttons>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Memes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] grid-cols-2">
                  <Component />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Upload</NavigationMenuTrigger>
              <NavigationMenuContent>
                <UploadButtonNavBar />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Buttons>
      <DarkModeSwitch />
    </Wrapper>
  );
}

export default NavBar;
