import { withBasePath } from "@/lib/basePath";

export type ModelStats = {
  height: string;
  bust?: string;
  waist?: string;
  hips?: string;
  suit?: string;
  inseam?: string;
  shoes: string;
  eyes: string;
  hair: string;
};

export type Model = {
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  gender: "female" | "male";
  instagram: string;
  followers: string;
  stats: ModelStats;
  description?: string;
  galleryCount: number;
};

export const models: Model[] = [
  {
    slug: "aleix-hall",
    name: "Aleix Hall",
    firstName: "Aleix",
    lastName: "Hall",
    gender: "male",
    instagram: "aleixhall",
    followers: "5.9k",
    galleryCount: 12,
    stats: {
      height: "6' 0½'' / 184.5cm",
      suit: "38R",
      waist: "28'' / 71cm",
      inseam: "32'' / 81cm",
      shoes: "10 / 44EU",
      eyes: "Green",
      hair: "Dark brown",
    },
  },
  {
    slug: "jash",
    name: "Jash",
    firstName: "Jash",
    lastName: "",
    gender: "male",
    instagram: "jashlem",
    followers: "6.3m",
    galleryCount: 12,
    stats: {
      height: "6' 2½'' / 189cm",
      suit: "38L",
      waist: "31'' / 79cm",
      inseam: "34'' / 86cm",
      shoes: "11 / 45EU",
      eyes: "Brown",
      hair: "Brown",
    },
  },
  {
    slug: "julie-tuzet",
    name: "Julie Tuzet",
    firstName: "Julie",
    lastName: "Tuzet",
    gender: "female",
    instagram: "julie.tuzet",
    followers: "193.5k",
    galleryCount: 12,
    stats: {
      height: "5' 11'' / 180cm",
      bust: "34½'' / 88cm",
      waist: "25½'' / 65cm",
      hips: "38'' / 96cm",
      shoes: "10 / 41EU",
      eyes: "Green",
      hair: "Dark blonde",
    },
  },
  {
    slug: "karolina-drozd",
    name: "Karolina Drozd",
    firstName: "Karolina",
    lastName: "Drozd",
    gender: "female",
    instagram: "karolinadrozd_",
    followers: "2.2k",
    galleryCount: 12,
    stats: {
      height: "5' 9½'' / 176cm",
      bust: "30'' / 76cm",
      waist: "25'' / 64cm",
      hips: "35½'' / 90cm",
      shoes: "8 / 39EU",
      eyes: "Green",
      hair: "Blonde",
    },
  },
  {
    slug: "luca-lemaire",
    name: "Luca Lemaire",
    firstName: "Luca",
    lastName: "Lemaire",
    gender: "male",
    instagram: "lucalemaire",
    followers: "3.4k",
    galleryCount: 12,
    stats: {
      height: "6' 1½'' / 186.5cm",
      suit: "38L",
      waist: "30'' / 76cm",
      inseam: "32'' / 81.5cm",
      shoes: "9 / 43EU",
      eyes: "Green brown",
      hair: "Dark brown",
    },
  },
  {
    slug: "marija-cvijetic",
    name: "Marija Cvijetic",
    firstName: "Marija",
    lastName: "Cvijetic",
    gender: "female",
    instagram: "marija_cvijetic",
    followers: "1.6k",
    galleryCount: 12,
    stats: {
      height: "5' 9½'' / 176cm",
      bust: "30½'' / 77cm",
      waist: "23½'' / 60cm",
      hips: "33½'' / 85cm",
      shoes: "9 / 40EU",
      eyes: "Green",
      hair: "Dark brown",
    },
  },
  {
    slug: "max-mersmann",
    name: "Max Mersmann",
    firstName: "Max",
    lastName: "Mersmann",
    gender: "male",
    instagram: "maxelemualaikum",
    followers: "7.6k",
    galleryCount: 12,
    stats: {
      height: "6' 3'' / 190cm",
      waist: "30½'' / 78cm",
      shoes: "11 / 45EU",
      eyes: "Blue",
      hair: "Dark blonde",
    },
  },
  {
    slug: "moritz-hau",
    name: "Moritz Hau",
    firstName: "Moritz",
    lastName: "Hau",
    gender: "male",
    instagram: "moritz_hau",
    followers: "2.4m",
    galleryCount: 12,
    stats: {
      height: "6' 3'' / 190cm",
      suit: "38L",
      waist: "30'' / 76cm",
      inseam: "34'' / 86.5cm",
      shoes: "10½ / 44.5EU",
      eyes: "Hazel",
      hair: "Brown",
    },
  },
  {
    slug: "sean-opry",
    name: "Sean Opry",
    firstName: "Sean",
    lastName: "Opry",
    gender: "male",
    instagram: "seanopry55",
    followers: "788.4k",
    galleryCount: 12,
    stats: {
      height: "6' 1'' / 186cm",
      suit: "38R",
      waist: "31'' / 79cm",
      inseam: "33'' / 84cm",
      shoes: "10 / 44EU",
      eyes: "Blue",
      hair: "Brown",
    },
  },
  {
    slug: "snejana-onopka",
    name: "Snejana Onopka",
    firstName: "Snejana",
    lastName: "Onopka",
    gender: "female",
    instagram: "snejanaonopka15",
    followers: "16.5m",
    galleryCount: 12,
    stats: {
      height: "5' 9'' / 175cm",
      bust: "34½'' / 87cm",
      waist: "23'' / 58cm",
      hips: "34½'' / 87cm",
      shoes: "7 / 38EU",
      eyes: "Blue gray",
      hair: "Light brown",
    },
  },
  {
    slug: "taja-jafarli",
    name: "Taja Jafarli",
    firstName: "Taja",
    lastName: "Jafarli",
    gender: "female",
    instagram: "taj.aa",
    followers: "3.2k",
    galleryCount: 12,
    stats: {
      height: "5' 10½'' / 179cm",
      bust: "32'' / 81.5cm",
      waist: "24½'' / 62.5cm",
      hips: "35½'' / 90.5cm",
      shoes: "10 / 41EU",
      eyes: "Green",
      hair: "Dark brown",
    },
  },
  {
    slug: "yael-shelbia",
    name: "Yael Shelbia",
    firstName: "Yael",
    lastName: "Shelbia",
    gender: "female",
    instagram: "yaelshelbia",
    followers: "1.4m",
    galleryCount: 12,
    description:
      "An Israeli model and actress. She has appeared in a number of international modeling campaigns. She became a leading model for Israeli brands Castro from 2017 and Renuar from 20 and currently stars in the Israeli television series Palmach on Teen Nick and Yes TV Kids. Shelbia has received additional media attention due to her Orthodox Jewish background, as she keeps kosher and observes Shabbat, which initially had led to controversy in her Orthodox Jewish religious community back in her native Israel. She has represented prestigious brands such as Lancôme and has worked with international names like Kim Kardashian's KKW Beauty and Kylie Jenner's Biotic Skincare. Yael's success story is a testament to her perseverance and unique ability to bridge the worlds of fashion and tradition. With her distinctive look and unwavering commitment to her values, Yael Shelbia Cohen stands as a remarkable figure in the world of supermodels.",
    stats: {
      height: "5' 8½'' / 174cm",
      bust: "31½'' / 80cm",
      waist: "23'' / 59cm",
      hips: "36'' / 92cm",
      shoes: "8 / 39EU",
      eyes: "Blue",
      hair: "Brown",
    },
  },
];

export function getModelBySlug(slug: string): Model | undefined {
  return models.find((m) => m.slug === slug);
}

export function getGalleryImages(slug: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) =>
      withBasePath(
        `/models/${slug}/gallery/${String(i + 1).padStart(2, "0")}.webp`
      )
  );
}
