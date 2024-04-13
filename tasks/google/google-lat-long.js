import BaseScraper from "../base";

// Example google search URL = "https://www.google.com/maps/search/https:%2F%2Fwww.moxboardinghouse.com%2F+seattle";

export default class GoogleLatLong extends BaseScraper {
  constructor(searchTerm) {
    const url = GoogleLatLong.getGoogleSearchURL(searchTerm);
    super(url);
    this.searchTerm = searchTerm;
  }

  async run() {
    const js_instructions =
      "%5B%7B%22wait%22%3A8000%7D%2C%7B%22evaluate%22%3A%22document.body.innerHTML%3Dwindow.location.href%3B%22%7D%5D";
    await this.scrapeHtml({ js_instructions, premium_proxy: "true" });

    const url = this.$("body").text().trim();
    this.latlong = this.extractLatLongFromUrl(url);
  }

  static getGoogleSearchURL(searchTerm) {
    const prefix = "https://www.google.com/maps/search/";
    searchTerm = searchTerm.replaceAll(" ", "+");

    return prefix + searchTerm;
  }

  extractLatLongFromUrl(url) {
    // Regular expression to match latitude and longitude
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;

    // Match the regex against the URL
    const match = url.match(regex);

    if (match && match.length === 3) {
      // The latitude is at index 1, and longitude is at index 2 in the match array
      const latitude = parseFloat(match[1]);
      const longitude = parseFloat(match[2]);

      return { latitude, longitude };
    } else {
      return {};
    }
  }
}
