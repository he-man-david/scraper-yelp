import BaseScraper from "../base";
import yelpHTML from "../../examples/yelp-biz-page-01";

export default class ScrapeYelpBizPage extends BaseScraper {
  constructor(url, paths) {
    super(url);
    this.paths = paths;
    this.data = {};
    for (const field in this.paths) {
      this.data[field] = "";
    }

    this.data.hours = "";
  }

  async run() {
    // Scrape the HTML page
    await this.scrapeHtml({
      premium_proxy: "true",
      js_instructions: "%5B%7B%22wait%22%3A2000%7D%5D",
    });

    // const yelpHTML = await this.importFileAsString("./html-output.html");
    // this.setHtml(yelpHTML);

    for (const field in this.paths) {
      const path = this.paths[field];

      const value = await this.getContentViaPath(path);
      this.data[field] = value;
    }

    this.data.hours = this.getHours();
  }

  // Below function attempts to parse hours of operation from YELP
  // 9-18-2023 maintenance will be needed in future
  // Cannot use PATH finding via DFS as the content of hours,day are scattered
  // Below approach looks for <tbody>, get innerText, then parses it
  getHours() {
    const $ = this.$;

    const tableRows = $("tr").filter(function (i, el) {
      const text = $(el).text().trim();

      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].includes(
        text.slice(0, 3)
      );
    });

    const hours = $(tableRows)
      .toArray()
      .map((tr) => {
        const day = $(tr).find("th").text().trim();
        const hour = $(tr).find("td").first().text().trim();
        const open = hour.split(" - ")[0];
        const close = hour.split(" - ")[1];

        return { day, open, close };
      });

    return hours;
  }
}
