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