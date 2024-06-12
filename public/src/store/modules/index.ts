
export type IKino = {
    kinopoiskId?: string | undefined
    filmId?: string | undefined
    nameEn: string | undefined
    nameOriginal: string | undefined
    nameRu: string | undefined
    posterUrl: string
}

type country = {
    country: string
}

type genre = {
    genre: string
}

// export type IAll = {
//     year: string
//     month: string
// }

export type IDetail = {
    countries: country[]
    description: string | undefined
    genres: genre[]
    nameEn: string | undefined
    nameOriginal: string | undefined
    nameRu: string | undefined
    posterUrl: string
    ratingKinopoisk: number
    year: number
}