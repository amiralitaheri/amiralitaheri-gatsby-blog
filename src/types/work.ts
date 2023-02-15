import React from "react";

export interface Work {
  name: string;
  description: React.ReactNode;
  date: string;
  imageName: string;
  tags: string[];
}
