import BaseScraper from "../base";

// These are defaults. They are used to match the text on a html page, and get the paths to that content.
// Use below as examples. Best to manually double check and make sure phone/rating/address...etc did not change.
const defaultEmpireStateBuildingURL =
  "https://www.yelp.com/biz/empire-state-building-new-york-2";
const defaultTextsOnPage = {
  name: "Empire State Building",
  rating: "4.0",
  website: "esbnyc.com",
  phone: "(212) 736-3100",
  address: "20 W 34th St New York, NY 10118",
};

export default class YelpBizPageInitializer extends BaseScraper {
  constructor(
    url = defaultEmpireStateBuildingURL,
    textsOnPage = defaultTextsOnPage
  ) {
    super(url);
    this.textsOnPage = textsOnPage;
    this.paths = {};
    for (const field in this.textsOnPage) {
      this.paths[field] = [];
    }
  }

  async run() {
    try {
      // Scrape the HTML page
      await this.scrapeHtml({
        premium_proxy: "true",
        js_instructions: "%5B%7B%22wait%22%3A2000%7D%5D",
      });

      // get all paths to texts on page that we want to find
      for (const field in this.textsOnPage) {
        const text = this.textsOnPage[field];

        const path = await this.findPathByInnerTextDFS(text);
        this.paths[field] = path || [];
      }
    } catch (error) {
      console.error(error.message);
      if (error.response) {
        console.error(error.response.data);
      }
    }
  }
}
