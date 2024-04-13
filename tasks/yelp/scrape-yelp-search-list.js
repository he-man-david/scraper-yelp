import BaseScraper from "../base";
import yelpHTML from "../../examples/yelp-seach-list-page";

export default class ScrapeYelpSearchList extends BaseScraper {
  async run() {
    try {
      this.bizPageUrls = [];

      // Scrape the HTML page
      await this.scrapeHtml({
        premium_proxy: "true",
        js_instructions: "%5B%7B%22wait%22%3A2000%7D%5D",
      });

      // Set the HTML content using the provided yelpHTML
      // this.setHtml(yelpHTML);

      // Get list of all business items. UI may change, need maintenance
      const list = this.$('[data-testid="serp-ia-card"]').toArray();

      this.searchlist = list.length ? list : [];

      for (let node of list) {
        const element = this.$(node).find("a");
        let href = element.attr("href");

        if (href.startsWith("/biz/")) {
          href = href.split("?")[0];

          if (!this.bizPageUrls.includes(href)) {
            this.bizPageUrls.push("https://www.yelp.com" + href);
          }
        }
      }
    } catch (error) {
      console.error(error.message);
      if (error.response) {
        console.error(error.response.data);
      }
    }
  }
}
