import React from "react";

export interface Skill {
  name: string;
  description: React.ReactNode;
  subSkills: string[];
}
