import { models, getModelBySlug } from "@/data/models";
import { ModelPage } from "@/components/ModelPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { withBasePath } from "@/lib/basePath";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const model = getModelBySlug(params.slug);
  if (!model) return { title: "Not Found" };

  return {
    title: `${model.name} — AKULA Models`,
    description: model.description || `${model.name} | AKULA Models Agency`,
    openGraph: {
      title: `${model.name} — AKULA Models`,
      images: [withBasePath(`/models/${model.slug}/cover.webp`)],
    },
  };
}

export default function ModelPageRoute({ params }: PageProps) {
  const model = getModelBySlug(params.slug);

  if (!model) notFound();

  return <ModelPage model={model} />;
}