import Jimp from "jimp";
import fs from "fs";
import path from "path";

export default class ScrapeImage {
  constructor(url, domain) {
    this.url = url;
    this.domain = domain;
  }

  async run() {
    try {
      const destinationDirectory = "./tmp/" + this.domain;

      // Create the destination directory if it doesn't exist
      if (!fs.existsSync(destinationDirectory)) {
        fs.mkdirSync(destinationDirectory, { recursive: true });
      }

      // Extract the filename from the URL
      const filename = path.basename(this.url);

      // Define the path where the image will be saved
      const imagePath = path.join(destinationDirectory, filename);

      // Check the number of files in the destination directory
      const fileCount = await this.countFilesInDirectory(destinationDirectory);

      // Check if the file already exists and we have < 13 images
      if (!fs.existsSync(imagePath) && fileCount < 13) {
        // Image must be PNG, JPG, or JPEG type!!!
        const image = await Jimp.read(this.url);

        const width = image.getWidth();
        const height = image.getHeight();

        if (width > 500 && height > 500) {
          await image.writeAsync(imagePath);

          console.log(
            `${this.url.slice(0, 25)}... width: ${width}, height: ${height}`
          );
        }
      } else {
        console.log(`File already exists: ${imagePath}`);
      }
    } catch (error) {
      console.error("Error saving or processing the image:", error);
    }
  }

  async countFilesInDirectory(directory) {
    try {
      const files = await fs.promises.readdir(directory);
      return files.length;
    } catch (error) {
      throw error;
    }
  }
}
