export interface BaseUser {
	id: number;
	username: string;
	email: string;
	blocked: boolean;
	confirmed: boolean;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	documentId: string;
	locale: string | null;
	provider: string;
}

export interface LoginResponse {
	jwt: string;
	user: BaseUser;
}
