"use client";

import dynamic from "next/dynamic";
import IssueFormSkeleton from "./IssueFormSkeleton";

const IssueForm = dynamic(() => import("./IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

export default function IssueFormWrapper({ issue }: { issue?: any }) {
  return <IssueForm issue={issue} />;
}
