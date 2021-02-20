import axios from "axios";

const userList = document.querySelector("#user-list");
const restaurantList = document.querySelector("#restaurant-list");
const reservationList = document.querySelector("#reservation-list");

const renderUsers = (users) => {
  const html = users
    .map(
      (user) => `
    <li>
      <a href='#${user.id}'>
        ${user.name}
      </a>
    </li>
    `
    )
    .join("");
  userList.innerHTML = html;
};

const renderRestaurants = (restaurants) => {
  const html = restaurants
    .map(
      (restaurant) => `
    <li>
      <a href='#${restaurant.id}'>
        ${restaurant.name}
      </a>
    </li>
    `
    )
    .join("");
  restaurantList.innerHTML = html;
};

const init = async () => {
  try {
    const users = (await axios.get("/api/users")).data;
    renderUsers(users);
    const restaurants = (await axios.get("/api/restaurants")).data;
    renderRestaurants(restaurants);
  } catch (ex) {
    console.log(ex);
  }
};

init();
