import sharp from "sharp";

export const optimizeImage = async (imageURL: string) => {
  try {
    await sharp(imageURL)
      .jpeg({
        quality: 80,
      })
      .toFile("output.jpg");
  } catch (error) {
    console.log(error);
  }
};
