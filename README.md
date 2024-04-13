# A simple scraper for YELP

This yelp scraper uses zen-row for proxy rotation to avoid bot detection. It runs each scraper jobs independently and stores data in postgres. Also has jobs to scrape the website of the business on yelp (if it has), and extract info via chatgpt from it.

1. Run all prisma migration or modify schema as needed
2. Test out the tasks, modify, or add your own as needed
3. Launchers are coordinator of set of tasks. Create/modify launchers as needed
