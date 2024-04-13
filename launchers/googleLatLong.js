import GoogleLatLong from "../tasks/google/google-lat-long";

export default async function (prisma) {
  try {
    let yelpBizProfiles = await prisma.yelpProfilePageTask.findMany({
      select: {
        name: true,
        address: true,
      },
    });

    yelpBizProfiles = yelpBizProfiles.filter(
      ({ address, name }) => address && name && address.length && name.length
    );

    for (let biz of yelpBizProfiles) {
      const { name, address } = biz;

      const existingRecord = await prisma.googleLatLongTask.findUnique({
        where: {
          address,
        },
      });

      if (existingRecord) continue;

      const searchTerm = `${name} ${address}`;
      const task = new GoogleLatLong(searchTerm);
      await task.run();

      const { latitude, longitude } = task.latlong;

      if (latitude && longitude) {
        await prisma.googleLatLongTask.create({
          data: {
            businessName: name || "",
            address: address || "",
            lat: latitude,
            long: longitude,
            completed: true,
          },
        });

        console.log(
          `[LAUNCHER] :: Successfully scraped Google Lat Long for ${name}`
        );
      }
    }
  } catch (error) {
    console.error("[LAUNCHER] :: ", error);
  }
}
