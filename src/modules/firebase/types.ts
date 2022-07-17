export type bgg = {
	href: string;
	id: string;
	thumbnail: string;
};

export type game = {
	bgg: bgg;
	name: string;
	id: string;
};

export type user = {
	email: string;
	username: string;
};

export type upc = {
	upc: string;
	name: string;
	id: string;
};
