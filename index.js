import YelpBizPageInitializer from "./tasks/yelp/yelp-biz-page-path-initializer";
import GoogleLatLong from "./tasks/google/google-lat-long";
import ScrapeYelpSearchList from "./tasks/yelp/scrape-yelp-search-list";
import ScrapeYelpBizPage from "./tasks/yelp/scrape-yelp-biz-page";
import ScrapeBusinessWebsite from "./tasks/business-website/scrape-business-website";
import ScrapeImage from "./tasks/business-website/scrape-image";
import ChatGPTTask from "./tasks/chatgpt/extract-data-from-text";
import LauncherYelpListPage from "./launchers/yelpListPage";
import LauncherYelpProfilePage from "./launchers/yelpProfilePage";
import LauncherGoogleLatLong from "./launchers/googleLatLong";
import LauncherBusinessSites from "./launchers/businessSites";
import LauncherBusinessSiteDataScraper from "./launchers/businessSiteDataScraper";
import { PrismaClient } from "./prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // City must be + separated instead of space, no special characters no commas, all lowercase
  const city = "new+york+city";

  // 1) Run Launcher to start scraping YELP list pages for a given city
  //    Every city has different number of good results. So need to manually
  //    go on YELP, check how many pages there are, and up to what page (maxPage)
  //    will the results be "good". We don't want bad results... example page 35 of Google
  await Launcher(prisma, city, 14);

  // 2.A) Initializing to map all paths for YELP contents on business profile page

  const YelpBizPageInitializerTask = new YelpBizPageInitializer();
  await YelpBizPageInitializerTask.run();
  const yelpBizPagePaths = YelpBizPageInitializerTask.paths;
  console.log("This is YELP biz profile page content paths: ");
  console.log(yelpBizPagePaths, "\n");

  // 2.B) Using Yelp business profile page paths, scrape each url from yelpBizPageUrls from search list page

  await LauncherYelpProfilePage(prisma, city, yelpBizPagePaths);

  // 3.A) scraper for Google latitude longitude

  await LauncherGoogleLatLong(prisma);

  // 3.B) scraper for business website

  await LauncherBusinessSites(prisma);

  await LauncherBusinessSiteDataScraper(prisma);

  // 4. Scrape all text from each business site, aggregate, send to chatgpt

  const res = await ChatGPTTask(text);

  console.log(JSON.stringify(res, null, 2));
};

await main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
