import ScrapeYelpBizPage from "../tasks/yelp/scrape-yelp-biz-page";

export default async function (prisma, city, paths) {
  try {
    let links = await prisma.yelpListPageTask.findMany({
      where: {
        city: city,
        completed: false, // Filter for incomplete tasks
      },
      select: {
        links: true, // Select the 'links' field
      },
    });
    // Extract and flatten the 'links' arrays
    links = links.map((task) => task.links).flat();

    // Scrape each profile page if completed == false or
    // Create YelpProfilePageTask if not exist in DB
    for (const link of links) {
      const profilePage = await prisma.yelpProfilePageTask.findUnique({
        where: {
          url: link,
        },
      });

      // if never scraped, not in DB, or completed false, failed previous scrape
      if (!profilePage || !profilePage.completed) {
        // initiate Yelp biz page scraper
        const task = new ScrapeYelpBizPage(link, paths);
        await task.run();

        let { name, rating, website, phone, address, hours } = task.data;
        website = website.split("/")[0];

        const upsertData = {
          name,
          rating,
          website,
          phone,
          address,
          hours,
        };

        // Upsert scraped data
        await prisma.yelpProfilePageTask.upsert({
          where: {
            url: link,
          },
          update: upsertData,
          create: {
            url: link,
            ...upsertData,
          },
        });
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
