export interface IExperience {
    year: string;
    position: string;
    company: string;
    location: string;
    description: string;
}

export interface IEducation {
    year: string;
    degree: string;
    university: string;
    location: string;
    description: string
}

export interface ISendMessage {
    username: string;
    message: string;
}

export interface IGetMessage {
    message: string;
    author: string;
    datetime: string;
    _id: string;
}

export type IngredientType = {
    name: string;
    price: number;
    image: string;
};

export type IngredientType2 = {
    name: string;
    price: number;
    image: string;
    count: number;
};

export interface IProject {
    title: string;
    description: string;
    image: string;
    route: string;
}