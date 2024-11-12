import { Badge } from "@/shadComponents/badge";
import { Separator } from "@/shadComponents/separator";
import React from "react";

type PropsType = {
  values: string[];
};

export default function PrioritiesBadges({ values }: PropsType) {
  if (values.length === 3) {
    return (
      <>
        <Separator />
        <Badge>All</Badge>
      </>
    );
  }

  return values.map((value) => (
    <React.Fragment key={value}>
      <Separator />
      <Badge>{value}</Badge>
    </React.Fragment>
  ));
}
