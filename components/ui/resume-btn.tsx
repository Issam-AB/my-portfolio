import React from "react";
import { StarBorder } from "./star-border";
import Link from "../link";

const ResumeBtn = () => {
  return (
    <Link
      href="https://docs.google.com/document/d/1flCvDQ7Yfq9ososd3n37NnFaAOK40iV5Qv_AEulil-g/edit?usp=sharing"
      target="_blank"
    >
      <StarBorder className="rounded-lg">
        <span className="text-xs font-medium transition-colors text-muted-foreground hover:text-foreground">
          Download CV
        </span>
      </StarBorder>
    </Link>
  );
};

export default ResumeBtn;
