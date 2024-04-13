import BaseScraper from "../base";
import _ from "lodash";
import html from "../../examples/yelp-biz-page-01";

const linkKeywords = [
  // General Info
  "about",
  "our-story",
  // FAQ
  "faq",
  "frequently-asked-questions",
  // Schedule/hours
  "hours",
  "schedule",
  // Pricing
  "ticket",
  "/buy",
  "pricing",
  "price",
  "/cost",
  "/book",
  "rental",
  "book-now",
  // Group/team-building specific info
  "group",
  "event",
  "parties",
  "corporate-event",
  "team-building",
  "teambuilding",
  "private",
];

export default class ScrapeBusinessWebsite extends BaseScraper {
  _run() {
    try {
      /**
        [
          {"wait": 1000},
          {"scroll_y": 1000},
          {"wait": 1000},
          {"scroll_y": 1000},
          {"evaluate": "document.querySelectorAll('img').forEach( img =>{ img.setAttribute('width',img.width) })"}
        ]
       */
      const js_instructions =
        "%5B%7B%22wait%22%3A1000%7D%2C%7B%22scroll_y%22%3A1000%7D%2C%7B%22wait%22%3A1000%7D%2C%7B%22scroll_y%22%3A1000%7D%2C%7B%22evaluate%22%3A%22document.querySelectorAll('img').forEach(%20img%20%3D%3E%7B%20img.setAttribute('width'%2Cimg.width)%20%7D)%22%7D%5D";
      return this.scrapeHtml({ js_instructions });
    } catch (error) {
      console.error(error);
    }
  }

  async run() {
    await this._run();

    // used for testing, set example html
    // await this.setHtml(html);

    this.links = this.getAllLinks() || [];
    this.images = this.getAllLargeImages() || [];
  }

  getAllLinks() {
    let links = this.$("a")
      .toArray()
      .map((link) => {
        link = this.$(link).attr("href");

        if (link.startsWith("https")) {
          return link;
        } else if (link.startsWith("/") || link.startsWith("#")) {
          return this.hostname + link;
        }
        return "";
      })
      .filter((link) => {
        if (!link) return false;

        for (const key of linkKeywords) {
          if (
            link.includes(key) &&
            !link.includes("linkedin") &&
            !link.includes("instagram") &&
            !link.includes("facebook") &&
            !link.includes("youtube") &&
            !link.includes("pinterest")
          )
            return true;
        }

        return false;
      });

    // only need 5 pages
    links = _.uniq(links).slice(0, 5);

    return links;
  }

  getAllLargeImages() {
    const imgs = this.$("img[src]")
      .filter((i, img) => {
        const src = this.$(img).attr("src") || "";
        if ((src && src.startsWith("https://")) || src.startsWith("/"))
          return img;
      })
      .toArray()
      .map((img) => {
        let src = this.$(img).attr("src");
        if (src.startsWith("/") && src.slice(0, 2) !== "//")
          src = "https://" + this.hostname + src;
        return src.split("?")[0];
      });

    // Select all div elements with background images
    const divsWithBackgroundImages = this.$(
      'div:has([style*="background-image"])'
    )
      .toArray()
      .map((element, i) => {
        const div = this.$(element);
        const style = div.html();

        // Extract the background image URL using a regular expression
        const urlMatch = style.match(
          /background-image:\s*url\((['"]?)(.*?)\1\)/
        );

        if (urlMatch && urlMatch[2]) {
          const imageUrl = urlMatch[2];
          return imageUrl.replaceAll("&quot;", "").split("?")[0];
        }

        return "";
      });

    const res = [...imgs, ...divsWithBackgroundImages].filter(
      (url) =>
        url.length &&
        url.startsWith("https://") &&
        (url.includes(".jpg") || url.includes(".jpeg") || url.includes(".png"))
    );

    return _.uniq(res);
  }
}
