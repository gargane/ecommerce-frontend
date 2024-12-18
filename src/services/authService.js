import axios from 'axios';

const API_URL = 'https://localhost:7264/api/Auth/login';

export const login = async (email, password, navigate) => {
  try {
    const response = await axios.post(API_URL, {
      email,
      password,
    });
    
    localStorage.setItem('token', response.data.token); 
    localStorage.setItem('userName', response.data.name);
    localStorage.setItem('roleid', response.data.roleId);
    localStorage.setItem('role', response.data.role);
    const lastVisitedPage = localStorage.getItem('lastPage') || '/';
    window.location.href = lastVisitedPage;

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
