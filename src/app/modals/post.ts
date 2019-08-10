export interface Post {
    id: string,
    title: string,
    intro: string,
    content: string,
    createdAt: Date,
    modifiedAt?: Date
}