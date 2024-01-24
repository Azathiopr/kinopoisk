import axios from "axios"

const instanse = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/',
    headers: {
        "Content-Type": "application/json",
        'X-API-KEY': '22913cba-9179-43dd-89fb-9fb39adbda55',
    }
})

export type IAll = {
    year: string
    month: string
}

export const kinoPoiskAPI = {
    getAllKino() {
        return instanse.get('v2.2/films')
    },
    getByName(value: string) {
        return instanse.get(`v2.1/films/search-by-keyword?keyword=${value}`)
    },
    getDetailKino(id: string) {
        return instanse.get(`v2.2/films/${id}`)
    },
    getFilterBiYear(all: IAll) {
        return instanse.get(`v2.2/films/premieres?year=${all.year}&month=${all.month}`)
    },
}
