"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { GiNightSky } from "react-icons/gi";
import { MdSunny } from "react-icons/md";
import React from "react";

import { Switch } from "@/components/ui/switch";

function DarkModeSwitch() {
  const [dayNight, setDayNight] = React.useState(false);

  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark"), setDayNight(true);
  }, []);

  if (dayNight) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  return (
    <div className="m-3">
      <Switch check={dayNight} onClick={() => setDayNight(!dayNight)} />
    </div>
  );
}

export default DarkModeSwitch;
