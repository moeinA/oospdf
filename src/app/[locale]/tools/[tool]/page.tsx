import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getToolById, getAllTools } from '@/config/tools';
import { getToolContent, type Locale } from '@/config/tool-content';
import type { Metadata } from 'next';

const SUPPORTED_LOCALES: Locale[] = ['en', 'fa'];

interface ToolPageParams {
  params: Promise<{ locale: string; tool: string }>;
}

export async function generateStaticParams() {
  const tools = getAllTools();
  return SUPPORTED_LOCALES.flatMap(locale =>
    tools.map(tool => ({ locale, tool: tool.slug }))
  );
}

export async function generateMetadata({ params }: ToolPageParams): Promise<Metadata> {
  const { locale: localeParam, tool: toolSlug } = await params;
  const tool = getToolById(toolSlug);
  if (!tool) return { title: 'Tool not found' };
  const content = getToolContent(localeParam as Locale, tool.id);
  return { title: content?.title ?? tool.id };
}

export default async function ToolPageRoute({ params }: ToolPageParams) {
  const { locale: localeParam, tool: toolSlug } = await params;
  setRequestLocale(localeParam);
  const tool = getToolById(toolSlug);
  if (!tool) notFound();
  return (
    <main>
      <p>{tool.id} — UI coming soon</p>
    </main>
  );
}
