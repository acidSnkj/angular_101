export  interface Product {
	name: string;
	price: number;
	image: string;
	category?: string;
}

export interface BoxStyle {
	width: number;
	height: number;
	backgroundColor: string;
}

export interface User {
	name: string;
	email: string;
	password: string;
	checkPassword: string;
}