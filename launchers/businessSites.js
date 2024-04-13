import ScrapeBusinessWebsiteTask from "../tasks/business-website/scrape-business-website";

export default async function (prisma) {
  try {
    let yelpBizProfiles = await prisma.yelpProfilePageTask.findMany({
      select: {
        website: true,
      },
    });

    for (let biz of yelpBizProfiles) {
      const { website } = biz;

      const existingRecord = await prisma.businessSiteTask.findUnique({
        where: {
          website,
        },
      });

      if (existingRecord) continue;

      const task = new ScrapeBusinessWebsiteTask("https://" + website);
      await task.run();

      await prisma.businessSiteTask.create({
        data: {
          website,
          links: task.links,
          images: task.images,
          completed: true,
        },
      });

      console.log(
        `[LAUNCHER] :: Successfully scraped business sites ${website} \n\n`
      );
    }
  } catch (error) {
    console.error("[LAUNCHER] :: ", error, "\n\n");
  }
}
