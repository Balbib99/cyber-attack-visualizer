import { notFound } from "next/navigation";
import { ChallengeRunner } from "@/components/challenges/ChallengeRunner";
import { challenges, getChallengeById } from "@/data/challenges";

type ChallengeDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return challenges
    .filter((challenge) => challenge.status === "available")
    .map((challenge) => ({ id: challenge.id }));
}

export async function generateMetadata({ params }: ChallengeDetailPageProps) {
  const { id } = await params;
  const challenge = getChallengeById(id);

  if (!challenge) {
    return {
      title: "Reto no encontrado | AttackFlow Lab",
    };
  }

  return {
    title: `${challenge.title} | AttackFlow Lab`,
    description: challenge.description,
  };
}

export default async function ChallengeDetailPage({
  params,
}: ChallengeDetailPageProps) {
  const { id } = await params;
  const challenge = getChallengeById(id);

  if (!challenge || challenge.status !== "available") {
    notFound();
  }

  return <ChallengeRunner challenge={challenge} />;
}
