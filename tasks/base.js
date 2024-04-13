import { ZenRows } from "zenrows";
import * as cheerio from "cheerio";
import fs from "fs";

/**
 * Base scraper class
 */

export default class BaseScraper {
  constructor(url) {
    this.client = new ZenRows(process.env.ZENROWS_API_KEY);
    this.url = url;
    this.hostname = new URL(this.url).hostname;
  }

  async scrapeHtml(opts = {}, retries = 3) {
    const optionConfigs = [
      { js_render: "true" }, // 5 credits
      { js_render: "true", premium_proxy: "true" }, // 15 credits
      { js_render: "true", premium_proxy: "true", antibot: "true" }, // 25 credits
    ];

    let options = {
      window_width: 2100,
      window_height: 2000,
      block_resources: "websocket",
      ...opts,
    };

    const currentOptions = optionConfigs[3 - retries];
    options = { ...options, ...currentOptions };

    console.log("Scraping :: ", this.url);
    console.log("ZenRow Options :: ", options, "\n");

    try {
      const { data } = await this.client.get(this.url, options);

      await this.setHtml(data);
    } catch (error) {
      console.error(error.message);
      if (error.response) {
        console.error(error.response.data);
      }

      if (retries > 0) {
        // retry scrapeHTML here
        console.log(`Retrying ${5 - retries}`);
        await this.scrapeHtml(opts, retries - 1);
      } else {
        console.error("\n I am done scraping.... this shit sucks \n");
      }
    }
  }

  async setHtml(data) {
    this.html = data;
    const $ = await cheerio.load(this.html);
    $.root()
      .children()
      .filter(function (i, el) {
        if ($(this).css("display") === "none") $(this).remove();
        if ($(this)[0].name === "script") $(this).remove();
      });

    this.$ = $;
  }

  importFileAsString(filePath) {
    try {
      const fileContents = fs.readFileSync(filePath, "utf-8");
      return fileContents;
    } catch (error) {
      console.error("Error reading file:", error.message);
      return null;
    }
  }

  writeHtmlToFile() {
    if (!this.html) {
      console.error("No HTML content to write.");
      return;
    }

    try {
      fs.writeFileSync("html-output.html", this.html);
      console.log('HTML content successfully written to "html-output.html".');
    } catch (error) {
      console.error("Error writing HTML content to file:", error.message);
    }
  }

  findPathByInnerTextDFS(searchText) {
    const $ = this.$;

    if (!$) {
      throw new Error("HTML content not loaded. Call setHtml first.");
    }

    function DFS(node, paths = []) {
      if (!node || node.children.length === 0) return;

      const list = node.children().toArray();

      for (let i = 0; i < list.length; i++) {
        const child = list[i];
        const newPaths = [...paths];
        newPaths.push([child.tagName, i]);

        if ($(child).text().trim() === searchText) {
          return newPaths;
        }

        const next = DFS($(child), newPaths);
        if (next) return next;
      }

      return;
    }

    return DFS(this.$.root(), []);
  }

  getContentViaPath(path) {
    if (!this.$) {
      throw new Error("HTML content not loaded. Call setHtml first.");
    }

    let node = this.$.root();

    for (const step of path) {
      const [tagName, pos] = step;

      if (node) {
        const children = node.children().toArray();

        if (children.length && children[pos]?.tagName === tagName) {
          node = this.$(children[pos]);
        } else {
          return "";
        }
      } else {
        // Page changed, need to update PATH or page did not contain data
        return "";
      }
    }

    return node.text().trim();
  }

  extractAllTextOnDOM() {
    const $ = this.$;

    if (!$) {
      throw new Error("HTML content not loaded. Call setHtml first.");
    }

    // Function to recursively traverse and collect text content
    function collectText(node, textCollector) {
      if (
        node.type === "text" &&
        node.data.length &&
        !node.data.includes("function") &&
        !node.data.includes("{") &&
        !node.data.includes("<")
      ) {
        textCollector.push(node.data.trim());
      } else if (node.children) {
        for (const childNode of node.children) {
          collectText($(childNode)[0], textCollector);
        }
      }
    }

    // Create an array to collect the text content
    const textContentArray = [];

    // Start collecting text content from the root element
    collectText($.root()[0], textContentArray);

    // Join the collected text into a single string
    const allText = textContentArray
      .join(" ")
      .replaceAll("\n", "")
      .replaceAll("  ", "");

    // Print or use the `allText` variable as needed
    return allText;
  }
}
