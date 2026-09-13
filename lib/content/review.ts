import reviewPayload from "@/lib/reviews/review.json";

export interface HomepageReview {
  id: string;
  name: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  platform: "Google";
  link: string;
}

type SourceReview = {
  id?: string;
  reviewer_name?: string;
  review_date_time?: string;
  rating?: number;
  review_text?: string;
  review_text_raw?: string;
  reviewer_link?: string;
};

type ReviewFeed = { reviews?: SourceReview[] };
type WidgetResponse = { data?: Array<{ widget_type?: { name?: string }; feed_url?: string }> };

const cleanText = (value?: string) => value?.replace(/\s+/g, " ").trim() ?? "";
const makeTitle = (content: string) => {
  const firstSentence = content.split(/[.!?]/)[0].trim();
  if (firstSentence.length <= 56) return firstSentence;
  return `${firstSentence.slice(0, 53).trimEnd()}…`;
};

function normalizeReviews(reviews: SourceReview[] = []): HomepageReview[] {
  return reviews
    .map((review) => {
      const content = cleanText(review.review_text) || cleanText(review.review_text_raw);
      const date = review.review_date_time
        ? new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(review.review_date_time))
        : "";
      return {
        id: review.id ?? `${review.reviewer_name}-${review.review_date_time}`,
        name: cleanText(review.reviewer_name) || "Green Sky traveler",
        date,
        rating: Math.max(1, Math.min(5, review.rating ?? 5)),
        title: content ? makeTitle(content) : "A wonderful travel experience",
        content: content || "Thank you to the Green Sky Travel team for the wonderful experience.",
        platform: "Google" as const,
        link: review.reviewer_link || "https://www.google.com/maps",
      };
    })
    .filter((review) => review.content.length > 0 && review.rating >= 4)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const homepageReviews = normalizeReviews(reviewPayload.reviews as SourceReview[]);

export async function getHomepageReviews(): Promise<HomepageReview[]> {
  const apiKey = process.env.SOCIABLEKIT_API_KEY;
  if (!apiKey) return homepageReviews;

  try {
    const widgetsResponse = await fetch("https://api.sociablekit.com/v1/widgets", {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: 900 },
    });
    if (!widgetsResponse.ok) return homepageReviews;

    const widgets = (await widgetsResponse.json()) as WidgetResponse;
    const widget = widgets.data?.find((item) => item.widget_type?.name === "Google Reviews" && item.feed_url);
    if (!widget?.feed_url) return homepageReviews;

    const feedResponse = await fetch(widget.feed_url, { next: { revalidate: 900 } });
    if (!feedResponse.ok) return homepageReviews;
    const feed = (await feedResponse.json()) as ReviewFeed;
    const liveReviews = normalizeReviews(feed.reviews);
    return liveReviews.length > 0 ? liveReviews : homepageReviews;
  } catch {
    return homepageReviews;
  }
}
