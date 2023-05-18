import axios from "axios";

const BASE_URL = "https://63bd44e2d6600623889fa9fb.mockapi.io";

export async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
}

export async function updateUser(id, user) {
  try {
    await axios.put(`${BASE_URL}/users/${id}`, user);
  } catch (error) {
    throw new Error("Error updating user");
  }
}
