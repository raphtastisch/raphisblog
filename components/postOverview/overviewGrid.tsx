import { getAllPosts, getImagePath } from "@/lib/getPosts";
import OverviewElement from "@/components/postOverview/overviewElement";
import { shuffleArray } from "@/lib/utils";
import { getBooksWithFullText, getBooksWithGermanContent } from "@/lib/books";
import { Post, defaultWrittenBy } from "@/lib/config";
import { getLocale } from "next-intl/server";

export default async function OverviewGrid({
  category,
}: {
  category?: string;
}) {
  // console.log("category", category)

  const locale = await getLocale();

  const overviewElementDataWithoutImagePaths = shuffleArray(
    getAllPosts(category, locale)
  );

  const overviewElementData = await Promise.all(
    overviewElementDataWithoutImagePaths.map(async (post) => {
      const imagePath = await getImagePath(
        post.category,
        post.slug,
        "illustration"
      );

      return {
        title: post.title,
        subtitle: post.subtitle || null,
        href: `/${post.category}/${post.slug}`,
        illustrationImagePath: imagePath,
        longDescription: post.longDescription,
        category: post.category,
        date: post.date,
        author: post.author ? post.author : post.writtenBy || defaultWrittenBy, // if an author exists, use it, otherwise use written by, default writtenby as default
      };
    })
  );

  return (
    <div className="grid gap-16 grid-cols-1 lg:grid-cols-10 lg:gap-12 xl:gap-16 lg:grid-flow-row-dense">
      {overviewElementData.map((data, index) => {
        // to match the pattern this condition needs to be met. desired pattern for optimal alignment: 0 4 6 10 12 16 18
        const isBig = index === 0 || (index % 2 === 0 && (index - 2) % 6 !== 0);
        //
        return <OverviewElement key={index} isBig={isBig} data={data} />;
      })}
    </div>
  );
}
