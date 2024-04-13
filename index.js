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

import html from "./examples/website";

const prisma = new PrismaClient();

const main = async () => {
  // City must be + separated instead of space, no special characters no commas, all lowercase
  const city = "new+york+city";

  // 1) Run Launcher to start scraping YELP list pages for a given city
  //    Every city has different number of good results. So need to manually
  //    go on YELP, check how many pages there are, and up to what page (maxPage)
  //    will the results be "good". We don't want bad results... example page 35 of Google
  // await Launcher(prisma, city, 14);

  // 2.A) Initializing to map all paths for YELP contents on business profile page

  // const YelpBizPageInitializerTask = new YelpBizPageInitializer();
  // await YelpBizPageInitializerTask.run();
  // const yelpBizPagePaths = YelpBizPageInitializerTask.paths;
  // console.log("This is YELP biz profile page content paths: ");
  // console.log(yelpBizPagePaths, "\n");

  // 2.B) Using Yelp business profile page paths, scrape each url from yelpBizPageUrls from search list page

  // await LauncherYelpProfilePage(prisma, city, yelpBizPagePaths);

  // 3.A) scraper for Google latitude longitude

  // await LauncherGoogleLatLong(prisma);

  // 3.B) scraper for business website

  // await LauncherBusinessSites(prisma);

  // await LauncherBusinessSiteDataScraper(prisma);

  // 4. Scrape all text from each business site, aggregate, send to chatgpt

  const text = `Great Gotham Challenge | New York City Challenge CoursesOur ApproachVirtual TeambuildingIn Person TeambuildingPublic EventsContact Us 646-8-GOTHAM Public Events Home / public events Central Park Sprint: Summer Series We have added two new dates of our Central Park Sprint this fall! Assemble your team and join us October 21 or October 28!Lasting 1.5-2 hours, it will still involve our signature immersive experiences, Cluemasters, and clever puzzles stashed in plain sight, but with a more “walk in the park” vibe. It’s great for a relaxing afternoon, families, or a first date (if you’re still unsure they’re right/GGC material).The experience will end in the park with a picnic lunch, and we can’t wait to see you there! Central Park Sprint TicketsAdditional InformationParticipants will be responsible for organizing their own teams of two to four. The challenge will involve roughly one mile of foot travel. No private, motorized transport is allowed. Any codebreaker, detective, investigator, or historian of good will is invited to enter. For those who participated in previous Central Park Challenges, this will contain some repeated clues.Join Our Mailing ListFor advance notice on public events and other special early bird discounts, please sign up for our communique below:Leave this field blank Name EmailSubmit Great Gotham Challenge is a product of Gotham Immersive Laboratories Contact Info 175 Varick St, New York, NY 10014 (646) 846-8426sales@ggc.nyc Quicklinks Our ApproachContact UsBlog Services Virtual TeambuildingIn Person TeambuildingPublic Events© 2023 Geniuses For Hire. All rights reserved."," GGC | NYC Scavenger Hunts and Immersive Puzzle AdventuresOur ApproachVirtual TeambuildingIn Person TeambuildingPublic EventsContact Us 646-8-GOTHAM STEP INTO AN UNFORGETTABLE IMMERSIVE EXPERIENCE Set your company apart through unique interactive challenges and events.Begin Your ChallengeWHAT WE DOWelcome to The Great Gotham Challenge. The Great Gotham Challenge is an immersive puzzle adventure that combines mind-bending puzzles, food, live theater, history, and embedded technology to create unforgettable team building experiences.As the clock ticks, competing teams race to find and decode a series of interactive clues that engage the rich culture and history of the world around us.Whether they’re virtual or in-person in New York City, our customizable experiences can help teams build cooperation, encourage out-of-the-box thinking, or just plain dazzle and delight, building unique shared experiences that will be talked about for years to come. LEARN MORE GET IN TOUCH WITH OUR BESPOKESPERSON TO PLAN YOUR TEAM’S NEXT ADVENTUREContact UsOUR OFFERINGSIN-PERSON EVENTSFor groups based in New York City, treat your team to an in-person adventure that will show you the city like you’ve never seen it before. Unlike traditional scavenger hunts that are often mere checklists of activities or photos to cross off, our experiences plunge you into a hidden world that will subvert your expectations at every turn.Book NowVIRTUAL EVENTS Working with a remote team? Immerse yourself in a digital challenge that surprises your work-from-home team at every turn — without feeling forced or fake. We’re all about crafting memorable, delightful experiences that are authentic, unexpected, and challenging enough to engage even the coolest kids in class. Our virtual challenges can be purely digital, or incorporate packages of interactive tactile clues and puzzles mailed to every participant, adding a physical dimension to your virtual event! Book NowGET IN TOUCHGreat Gotham Challenge is like nothing your team has ever experienced.It's challenging, takes mental grit to complete, and starts at $2000 for our most basic, 2-hour in-person experience.If you are looking for something short`;

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
