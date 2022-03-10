export type Topic = {
    name: string,
    collages: { url: string }[]
}


export type Image = {
    id: string,
    description?: string,
    url: string,
    link: string,
    topics: string[],
    user: string
}

export type ResponseBody<T> = {
    data: T,
    pagination: {
        page: number,
        perPage: number,
        totalPages: number
    }
}  