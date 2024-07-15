const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CATEGORY = {
  FOOD: 'Food',
  TRANSPORTATION: 'Transportation',
  UTILITIES: 'Utilities',
  EDUCATION: 'Education',
  PERSONAL_CARE: 'Personal Care',
  CLOTHING: 'Clothing',
  HOUSING: 'Housing',
  HEALTH_CARE: 'Health Care',
  ENTERTAINMENT: 'Entertainment',
  SHOPPING: 'Shopping',
  INSURANCE: 'Insurance',
  MISCELLANEOUS: 'Miscellaneous'
};

async function createCategories() {
  const data = [
    { name: CATEGORY.FOOD },
    { name: CATEGORY.TRANSPORTATION },
    { name: CATEGORY.UTILITIES },
    { name: CATEGORY.EDUCATION },
    { name: CATEGORY.PERSONAL_CARE },
    { name: CATEGORY.CLOTHING },
    { name: CATEGORY.HOUSING },
    { name: CATEGORY.HEALTH_CARE },
    { name: CATEGORY.ENTERTAINMENT },
    { name: CATEGORY.SHOPPING },
    { name: CATEGORY.INSURANCE },
    { name: CATEGORY.MISCELLANEOUS }
  ];

  await prisma.category.createMany({ data });
}

async function fetchCategory() {
  return prisma.category.findMany();
}

async function getCategoryNameIdMap() {
  const categories = await fetchCategory();
  return categories.reduce((map, category) => {
    map.set(category.name, category.id);
    return map;
  }, new Map());
}

async function createTransactions() {
  const categoryMap = await getCategoryNameIdMap();
  await prisma.transaction.createMany({
    data: [
      {
        amount: 2000,
        date: new Date('2023-01-09'),
        description: 'Pepsi',
        categoryId: categoryMap.get(CATEGORY.FOOD)
      },
      {
        amount: 6000,
        date: new Date('2023-02-12'),
        description: 'Beef noodles',
        categoryId: categoryMap.get(CATEGORY.FOOD)
      },
      {
        amount: 4700,
        date: new Date('2023-03-02'),
        description: 'BTS',
        categoryId: categoryMap.get(CATEGORY.TRANSPORTATION)
      },
      {
        amount: 79535,
        date: new Date('2023-04-23'),
        description: 'Electric bill',
        categoryId: categoryMap.get(CATEGORY.UTILITIES)
      },
      {
        amount: 19900,
        date: new Date('2023-05-06'),
        description: 'KFC Tuesday',
        categoryId: categoryMap.get(CATEGORY.FOOD)
      },
      {
        amount: 49900,
        date: new Date('2023-06-30'),
        description: 'New shirt',
        categoryId: categoryMap.get(CATEGORY.CLOTHING)
      },
      {
        amount: 696955,
        date: new Date('2023-07-12'),
        description: 'Yearly internet bill',
        categoryId: categoryMap.get(CATEGORY.UTILITIES)
      },
      {
        amount: 112500,
        date: new Date('2023-08-22'),
        description: 'Craft beer buffet',
        categoryId: categoryMap.get(CATEGORY.FOOD)
      },
      {
        amount: 55500,
        date: new Date('2023-09-11'),
        description: 'Karaoke',
        categoryId: categoryMap.get(CATEGORY.ENTERTAINMENT)
      },
      {
        amount: 229900,
        date: new Date('2023-10-04'),
        description: 'Mobile case',
        categoryId: categoryMap.get(CATEGORY.SHOPPING)
      },
      {
        amount: 19600,
        date: new Date('2023-11-17'),
        description: 'Eat am are',
        categoryId: categoryMap.get(CATEGORY.FOOD)
      },
      {
        amount: 550000,
        date: new Date('2023-12-28'),
        description: 'Airline ticket',
        categoryId: categoryMap.get(CATEGORY.TRANSPORTATION)
      }
    ]
  });
}

async function run() {
  try {
    await prisma.transaction.deleteMany();
    await prisma.category.deleteMany();
    await createCategories();
    await createTransactions();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

run();
