import OverviewGrid from "@/components/postOverview/overviewGrid";
import StyledH1 from "@/components/ui/styledH1";

import { Link } from "@/navigation"; //"next/link";
import { cn, shuffleArray } from "@/lib/utils";
import { getUniqueTags, uniqueTags } from "@/lib/content/books";

import InfiniteSlider from "@/components/InfiniteSlider";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Locale } from "@/lib/config";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Navbar" });

  return {
    title: t("home"),
  };
}


export default function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  const translateTags = useTranslations("Tags");

  // checks if all tags have correct full names set
  // checkTags();
  // shuffle the key of tags
  const exampleKeys = shuffleArray(uniqueTags); // Object.keys(fullNameTags)

  // console.log(getUniqueTags());

  return (
    <div className="flex flex-col items-center space-y-8 md:space-y-16 ">
      <div className=" flex flex-col space-y-4 items-start sm:items-center mt-8">
        <StyledH1 className="w-full text-center px-4 ">
          {t("title")}
          {/* Du brauchst eine Buchempfehlung? */}
        </StyledH1>

        <div className="flex flex-wrap px-4 items-center justify-center">
          {exampleKeys.slice(0, 6).map((key, index) => (
            <Link key={index} href={`/recommendations?tag=${key}`}>
              <div className="button my-1 mx-1 xs:mx-2 py-1 px-2 xs:px-4 rounded select-none text-center font-semibold">
                {translateTags(key)}
              </div>
            </Link>
          ))}
          <Link href="/recommendations">
            <div
              className={cn(
                " border border-main-700 border-opacity-50 m-1 py-1 px-2 xs:px-4 rounded select-none text-center font-semibold",
                "bg-purewhite text-main-700",
                "shadow-lg font-semibold tracking-wider sm:tracking-wide hover:bg-opacity-90 text-center transition-all duration-150 hover:scale-110"
              )}
            >
              {t("manymore")}
            </div>
          </Link>
        </div>

        <InfiniteSlider />
      </div>
      <div className="px-4 w-full pt-4  ">
        <div className="h-1 bg-main-700 opacity-50 w-full rounded-full" />
      </div>
      <div className="flex flex-col space-y-4 sm:space-y-8 items-center px-4">
        <StyledH1 className="mt-0 md:mt-0 text-center ">
          {t("allPosts")}
        </StyledH1>
        <OverviewGrid />
      </div>
      
    </div>
  );
}
