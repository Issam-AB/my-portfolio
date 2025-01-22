import React from "react";
import { StarBorder } from "./star-border";

const ResumeBtn = () => {
  return (
    <StarBorder className="rounded-lg">
      <span className="text-xs font-medium transition-colors text-muted-foreground hover:text-foreground">
        Download CV
      </span>
    </StarBorder>
  );
};

export default ResumeBtn;
