// src/services/userService.ts

import instance from '../index';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  user: User
  token?: string
}

const baseUrl = 'v1/users'

export const UserService = {
  async create(name: string, email: string, password: string): Promise<User> {
    try {
      const response = await instance.post(baseUrl, { name, email, password });
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  async createWithGoogle(token: string): Promise<User> {
    try {
      const response = await instance.post('/users/google', { token });
      return response.data;
    } catch (error) {
      console.error('Error creating user with Google:', error);
      throw error;
    }
  },

  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const response = await instance.post('/users/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async loginWithGoogle(token: string): Promise<User> {
    try {
      const response = await instance.post('/users/login/google', { token });
      return response.data;
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  },

  setAuthToken(token: string) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  removeAuthToken() {
    delete instance.defaults.headers.common['Authorization'];
  },

  async getAll(): Promise<User[]> {
    try {
      const response = await instance.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  async getById(id: number): Promise<User> {
    try {
      const response = await instance.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  async changePassword(id: number, currentPassword: string, newPassword: string): Promise<void> {
    try {
      await instance.put(`/users/${id}/password`, { currentPassword, newPassword });
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  },

  async changeName(id: number, name: string): Promise<User> {
    try {
      const response = await instance.put(`/users/${id}/name`, { name });
      return response.data;
    } catch (error) {
      console.error('Error changing name:', error);
      throw error;
    }
  },
};