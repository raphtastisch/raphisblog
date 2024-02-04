"use client";

import Image from "next/image";
import { Book } from "@/lib/config";
import { useEffect, useState } from "react";
import { cn, shuffleArray } from "@/lib/utils";
import Tag from "./tag";
import { Link } from "@/navigation";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function RecommendationGrid({
  books,
  allTags,
}: {
  books: Book[];
  allTags: string[];
}) {
  const [tags, setTags] = useState<string[]>([]);

  const t = useTranslations("Recommendations");



  const searchParams = useSearchParams(); // Extract the tag from the URL
  // console.log("searchParams", searchParams.getAll("tag"));

  const router = useRouter();
  useEffect(() => {
    const tagsFromUrl = searchParams.getAll("tag");
    if (tagsFromUrl.length > 0) {
      setTags(tagsFromUrl);
    }

    // TODO: would remove locale -> needs fixing
    // // removes the search params from the URL
    // router.replace("/recommendations");
  }, [searchParams, router]);

  // used to display only those tags to the user, that are still linked with a book that is shown
  const availableTags: string[] = [];

  const filteredBooks: Book[] =
    tags.length === 0
      ? books
      : books.filter((book) => {
          const matchesTags =
            book.tags &&
            book.tags.length > 0 &&
            tags.every((tag) => book.tags!.includes(tag)); // all selected tags must be in the book tags
          //            book.tags.some((tag) => tags.includes(tag));

          if (matchesTags) {
            book.tags!.forEach((tag) => {
              if (!availableTags.includes(tag)) availableTags.push(tag);
            });
          }

          return matchesTags;
        });

  // console.log("availableTags", availableTags);

  const getRandomElement = (array: any[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const readResons = [
    <span key="interesting">{t("interesting")}</span>,
    <span key="readable">{t("readable")}</span>,
    <span key="thrilling">{t("thrilling")}</span>,
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col items-start space-y-2 md:space-y-0 md:flex-row md:space-x-8 w-full pt-4 md:items-center">
        <div className="min-w-44 h-fit cursor-pointer ml-0 md:ml-4 p-2 rounded-lg  button">
          {tags.length > 0 ? (
            <div className="" onClick={() => setTags([])}>
              {t("newSearch")}
            </div>
          ) : (
            <div
              className=""
              onClick={() => setTags([getRandomElement(allTags)])}
            >
              {t("randomSelection")}
            </div>
          )}
        </div>

        <div className="flex flex-wrap ">
          {allTags.sort().map((tag) =>
            availableTags.length === 0 || availableTags.includes(tag) ? (
              <Tag
                key={tag}
                tag={tag}
                isActive={tags.includes(tag)}
                onClick={() => {
                  if (tags.includes(tag)) {
                    setTags(tags.filter((t) => t !== tag));
                  } else {
                    setTags([...tags, tag]);
                  }
                  return null;
                }}
              />
            ) : null
          )}
          {tags.length !== 0 && (
            <div
              onClick={() => setTags([])}
              className="cursor-pointer m-1 py-1 px-4 rounded-full select-none text-center text-xs font-semibold text-gray-500 bg-gray-300 whitespace-nowrap"
            >
              + {allTags.length - availableTags.length} {t("hiddenTags")}
            </div>
          )}
        </div>
      </div>
      <div className="text-main-700 text-xs md:text-sm mt-4">{t("notTranslated")}</div>
      <div className="h-1 bg-gradient-to-r from-main-600 to-main-700 opacity-50 w-full mt-1 mb-1 rounded-full" />
      <div className="text-main-700 text-xs md:text-sm text-right w-full mb-8 xl:mb-4">
        {t.rich("showingXfromXRecommendations", {
          strong: (chunks) => <strong>{chunks}</strong>,
          filteredLength: filteredBooks.length,
          booksLength: books.length,
        })}
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredBooks.map((book, index) => {
          const Wrapper = ({ children }: { children: JSX.Element }) => {
            return book.hasFullText ? (
              <Link href={"/books/" + book.slug}>{children}</Link>
            ) : (
              <Link
                target="_blank"
                href={`https://www.amazon.de/s?k=${book.title.replace(
                  " ",
                  "+"
                )}&i=audible&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1Y539SCFIVZKF&sprefix=alignment+prob%2Caudible%2C286&linkCode=ll2&tag=raphaelfritz-21&linkId=11b8f9eddf91a807e78d59cdb6ea22b5&language=de_DE&ref_=as_li_ss_tl`}
              >
                {children}
              </Link>
            );
          };

          return (
            <div key={book.slug} className="sm:p-4 flex flex-col space-y-0 ">
              <div className="flex flex-row">
                <div className="flex flex-col space-y-2">
                  <div className="relative w-40 h-56 sm:w-48 sm:h-72">
                    <Image
                      src={book.imagePath!}
                      alt="Book"
                      fill={true}
                      sizes={"20vw"}
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                      className=""
                    ></Image>
                  </div>
                  <div className="flex flex-col space-y-1 md:pt-2">
                    <div className="text-main-700 bg-white text-center">
                      {t("sounds")}
                      {readResons[index % 3]}
                    </div>
                    <Wrapper key={book.slug}>
                      <div className="rounded-lg p-2 w-full button">
                        {book.hasFullText ? (
                          <>{t("toReview")}</>
                        ) : (
                          <>{t("availableHere")}</>
                        )}
                      </div>
                    </Wrapper>
                  </div>
                </div>

                <div className="flex flex-col pl-4">
                  <div className=" text-main-700  italic">
                    {book.subtitle ? (
                      <>{book.subtitle}</>
                    ) : (
                      <>{book.shortDescription}</>
                    )}
                  </div>
                  <div className="mt-1 text-main-700 font-semibold text-xl sm:text-2xl md:text-3xl">
                    {book.title}
                  </div>

                  <div className=" mt-2">{book.longDescription}</div>
                  <div className="mt-1  text-right text-main-700">
                    {t("by")}&nbsp;<strong>{book.author}</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
