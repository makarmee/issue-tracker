import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueFormWrapper from "@/app/issues/_components/IssueFormWrapper";

interface Props {
  params: { id: string };
}

export default async function EditIssuePage({ params }: Props) {
  const id = Number(params.id);
  if (isNaN(id)) notFound();

  const issue = await prisma.issue.findUnique({
    where: { id },
  });

  if (!issue) notFound();

  return <IssueFormWrapper issue={issue} />;
}
