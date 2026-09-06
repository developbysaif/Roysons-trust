import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "@/components/ui/NewsCard";
import { newsData } from "@/data/newsData";

export const metadata = {
  title: "News & Updates – Field Dispatches & Press Releases",
  description:
    "Stay informed with the latest humanitarian developments, medical camp schedules, scholarship announcements, and field dispatches from Roysons Trust.",
};

export default function NewsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="LATEST DEVELOPMENTS"
        title="News &amp; Field Updates"
        description="Read detailed field dispatches, medical camp schedules, scholarship announcements, and milestone reports from Roysons Trust."
        breadcrumbs={[{ label: "News & Updates" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PRESS &amp; STORIES"
            title="Recent Dispatches &amp; Announcements"
            subtitle="Follow our journey across Pakistan as we execute life-saving initiatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
