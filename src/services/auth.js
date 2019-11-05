export const TOKEN_KEY = "rKl237p0-token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const loginService = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logoutService = () => { 
    localStorage.removeItem(TOKEN_KEY);
};