import prisma from './prisma';

export async function fetchTotalExpense() {
  const result =
    await prisma.$queryRaw`SELECT SUM(amount) AS totalExpense FROM transactions`;
  return result[0].totalExpense / 100;
}

export async function fetchTotalTransaction() {
  const result =
    await prisma.$queryRaw`SELECT COUNT(id) AS totalTransaction FROM transactions`;
  return Number(result[0].totalTransaction);
}

export async function fetchMostCategoryExpense() {
  const result =
    await prisma.$queryRaw`SELECT c.name, SUM(t.amount)/100 AS totalExpense 
      FROM transactions AS t LEFT JOIN categories c ON t.category_id = c.id GROUP BY c.id
      ORDER BY totalExpense DESC LIMIT 1
    `;
  return result[0];
}

export async function fetchMostCategoryTransaction() {
  const result =
    await prisma.$queryRaw`SELECT c.name, COUNT(t.id) AS totalTransaction 
      FROM transactions AS t LEFT JOIN categories c ON t.category_id = c.id GROUP BY c.id
      ORDER BY totalTransaction DESC LIMIT 1
    `;
  return {
    name: result[0].name,
    totalTransaction: Number(result[0].totalTransaction)
  };
}

export async function fecthLatestTransaction() {
  return prisma.transaction.findMany({
    orderBy: { date: 'desc' },
    take: 5,
    include: { category: true }
  });
}

const PER_PAGE = 5;
export async function fetchTotalPageByQuery(query) {
  const count = await prisma.transaction.count({
    where: {
      OR: [
        {
          description: {
            contains: query
          }
        },
        {
          category: {
            name: {
              contains: query
            }
          }
        }
      ]
    }
  });
  return Math.ceil(count / PER_PAGE);
}

export async function fetchFilteredTransactions(query, currentPage) {
  return prisma.transaction.findMany({
    where: {
      OR: [
        {
          description: {
            contains: query
          }
        },
        {
          category: {
            name: {
              contains: query
            }
          }
        }
      ]
    },
    take: PER_PAGE,
    skip: PER_PAGE * (currentPage - 1),
    orderBy: {
      date: 'desc'
    },
    include: {
      category: true
    }
  });
}
