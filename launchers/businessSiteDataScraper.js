import ScrapeImage from "../tasks/business-website/scrape-image";
import ScrapeBusinessWebsiteTask from "../tasks/business-website/scrape-business-website";
import fs from "fs";

export default async function (prisma) {
  try {
    const businessSites = await prisma.businessSiteTask.findMany({
      select: {
        website: true,
        links: true,
      },
    });

    for (let site of businessSites) {
      const { website, links } = site;
      links.push(website);

      const existingRecord = await prisma.businessSiteDataTask.findUnique({
        where: {
          website,
        },
      });

      if (existingRecord) continue;

      console.log(website);

      // Collection of texts for chatgpt
      // extract texts from business link page to chunks of text length 3000
      const chatgptTextChunks = [];

      for (let link of links) {
        if (
          link.includes("linkedin") ||
          link.includes("instagram") ||
          link.includes("facebook") ||
          link.includes("youtube") ||
          link.includes("pinterest")
        )
          continue;

        link = !link.startsWith("http") ? "https://" + link : link;

        const siteTask = new ScrapeBusinessWebsiteTask(link);
        await siteTask._run();

        // extract all images link, scrape image if they are large
        const images = siteTask.getAllLargeImages();
        for (let image of images) {
          const imageTask = new ScrapeImage(image, website);
          await imageTask.run();
        }

        const text = siteTask.extractAllTextOnDOM();
        for (let i = 0; i < text.length; i += 3000) {
          const start = Math.max(i, i - 1000);
          const end = Math.min(i + 3000, text.length);
          const chunk = text.slice(start, end);

          chatgptTextChunks.push(chunk);
        }
      }

      // Store chatgpt text chunks in DB;
      // images require manual script, since some photos are just logos, or useless background img

      await prisma.businessSiteDataTask.create({
        data: {
          website,
          texts: chatgptTextChunks,
          images: [],
        },
      });

      console.log("chatgpt text chunks size :: ", chatgptTextChunks.length);
    }

    const directoryPath = "./tmp"; // Change this to the path of your "tmp" directory

    // Use the fs.readdirSync() method to read the contents of the directory

    const folderNames = fs
      .readdirSync(directoryPath)
      .filter((item) => fs.statSync(`${directoryPath}/${item}`).isDirectory());

    for (let domain of folderNames) {
      let images = fs.readdirSync(`${directoryPath}/${domain}`);
      images = images.map((img) => {
        if (img.startsWith("http")) return img;
        return `${domain}/${img}`;
      });

      if (images.length) {
        await prisma.businessSiteDataTask.update({
          where: {
            website: domain,
          },
          data: {
            images: images,
          },
        });
      }
    }
  } catch (error) {
    console.error("[LAUNCHER] :: ", error, "\n\n");
  }
}
