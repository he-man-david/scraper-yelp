import ScrapeYelpSearchList from "../tasks/yelp/scrape-yelp-search-list";

export default async function (prisma, searchPhrase, city, maxPage) {
  try {
    searchPhrase = searchPhrase.replace(" ", "+");
    city = city.replace(" ", "+");
    const url = `https://www.yelp.com/search?find_desc=${searchPhrase}&find_loc=${city}&start=`;

    for (let page = 0; page < maxPage; page++) {
      const offset = page * 10;
      // Initiate yelp search list scraper
      const task = new ScrapeYelpSearchList(url + offset);
      await task.run();
      // Each search list page has 10 results, get links to biz profile page
      const links = task.bizPageUrls;

      // store in DB
      await prisma.yelpListPageTask.upsert({
        where: {
          city: city,
          page: page,
          url: url + offset,
        },
        update: {
          url: url + offset,
          links,
        },
        create: {
          city: city,
          url: url + offset,
          page: page,
          links,
        },
      });

      console.log(
        `[LAUNCHER] :: Successfully scraped Yelp List Page ${page} for ${city}`
      );
    }
  } catch (error) {
    console.error("[LAUNCHER] :: ", error);
  }
}
