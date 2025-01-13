"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import React from "react";

import { Switch } from "@/components/ui/switch";

function DarkModeSwitch() {
  const { setTheme } = useTheme();
  const [dayNight, setDayNight] = React.useState(false);
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
