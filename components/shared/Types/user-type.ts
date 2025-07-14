// src/types/userTypes.ts

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginResponse {
  user: User;
  token?: string;
  refreshToken?: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface GoogleAuthRequest {
  token: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangeNameRequest {
  name: string;
}

export interface UserDTO {
  id: number;
  name: string;
  email: string;
}

// Tipo para resposta paginada (se aplicável)
export interface PaginatedUsers {
  data: User[];
  total: number;
  page: number;
  limit: number;
}