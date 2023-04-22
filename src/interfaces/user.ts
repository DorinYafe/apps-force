//TODO:
// update User interface and remove UpdateUser interface

export interface User {
    login: {
        uuid: string,
    },
    name: {
        title: string,
        first: string,
        last: string,
    },
    email: string,
    picture: {
        medium: string,
    },
    location: {
        street: {
            number: number,
            name: string,
        },
        city: string,
        country: string,
    },
}

export interface UpdateUser {
    title: string,
    firstName: string,
    lastName: string,
    email: string,
    streetName: string,
    streetNumber: number,
    city: string,
    country: string,
}