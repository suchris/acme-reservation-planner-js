import axios from 'axios';

const userList = document.querySelector('#user-list');
const restaurantList = document.querySelector('#restaurant-list');
const reservationList = document.querySelector('#reservation-list');

const renderUsers = (users) => {
    const html = users.map(user => `
    <li>
      <a href='#${user.id}'>
        ${user.name}
      </a>
    <li>
    `).join('');
    userList.innerHTML = html;
}

const init = async () => {
    try {
        const users = (await axios.get('/api/users')).data;
        renderUsers(users);
    } catch (ex) {
        console.log(ex);
    }
}

init();

