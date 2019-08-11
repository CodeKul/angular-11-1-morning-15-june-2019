export interface User {
    userName: string
    password: string
}

export interface UserCreateRes {
    userName: string;
    password: string;
    id: string;
    createdAt: string;
}

export interface Data {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ListUserRes {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Data[];
}