import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch(
      "https://api2.ottplay.com/api/v4.5/web/recommend/v3/news/source/content/home?payloadOptimize=true",
      {
        method: "POST",
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          apiversion: "1",
          authorization: "Bearer F421D63D166CA343454DD833B599C",
          "cache-control": "no-cache",
          "content-type": "application/json;charset=UTF-8",
          device_id: "7caa38eb-0840-4f09-93ff-4aab45407b08",
          devicetype: "web",
          no_redis: "true",
          origin: "https://www.ottplay.com",
          pc_type: "0",
          plan_code: "NA",
          referer: "https://www.ottplay.com/sports/news",
          source: "web",
          unique_id: "7caa38eb-0840-4f09-93ff-4aab45407b08",
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        },
        body: JSON.stringify({
          content_type: "sport",
          lang: "",
          page: 1,
          limit: 16,
          source: "news",
          responseType: "full",
        }),
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch news")
    }

    const data = await response.json()

    const articles =
      data.news?.map((item: any, index: number) => ({
        id: index + 1,
        title: item.title || "No title available",
        excerpt: item.description || "No description available",
        image: item.image_link || "/placeholder.svg",
        date: new Date().toLocaleString(),
      })) || []

    return NextResponse.json({ articles })
  } catch (error) {
    console.error("Error fetching news:", error)

    // Return fallback data if API fails
    const fallbackArticles = [
      {
        id: 1,
        title: "Asia Cup 2025: Tournament Schedule Released",
        excerpt:
          "The complete fixture list for Asia Cup 2025 has been announced with matches starting from September 9th.",
        image: "/cricket-tournament-schedule.jpg",
        date: "2 hours ago",
      },
      {
        id: 2,
        title: "Afghanistan Squad Analysis for Asia Cup",
        excerpt:
          "Breaking down Afghanistan's 15-man squad selection and key players to watch in the upcoming tournament.",
        image: "/cricket-team-analysis.jpg",
        date: "4 hours ago",
      },
      {
        id: 3,
        title: "Dubai Stadium Ready to Host Asia Cup Matches",
        excerpt:
          "The iconic Dubai International Cricket Stadium has been confirmed as one of the venues for Asia Cup 2025.",
        image: "/cricket-stadium.jpg",
        date: "6 hours ago",
      },
    ]

    return NextResponse.json({ articles: fallbackArticles })
  }
}
