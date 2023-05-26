import server from "./default";

const URL_LIST = Object.freeze({
  getAll: "/sets",
  getByUser: "/sets/user",
  getById: "/sets/",
  create: "/sets",
  updateSet: "/sets/",
  updateCard: "/sets/cards/",
  delete: "/sets/",
  deleteCard: "/sets/cards/",
});

export const getAll = async (query: string, page = "1", limit = "10") => {
  const params = new URLSearchParams({
    page,
    limit,
    query,
  });

  try {
    const { data } = await server.get(
      `${URL_LIST.getAll}?${params.toString()}`
    );
    return data;
  } catch (e: any) {
    return { status: e.response?.status, message: e.message };
  }
};

export const getByUser = async ({ page = "1", limit = "10" }) => {
  const params = new URLSearchParams({
    page,
    limit,
  });

  try {
    const { data } = await server.get(
      `${URL_LIST.getByUser}?${params.toString()}`,
      { withCredentials: true }
    );
    return data;
  } catch (e: any) {
    return { status: e.response?.status, message: e.message };
  }
};

export const getById = async (setId: string) => {
  try {
    const { data } = await server.get(`${URL_LIST.getByUser}/${setId}`);
    return data;
  } catch (e: any) {
    return { status: e.response?.status, message: e.message };
  }
};
