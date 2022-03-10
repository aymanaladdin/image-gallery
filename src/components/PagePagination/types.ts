import { Dispatch, SetStateAction } from "react"

export type PagePaginationProps = {
    page: number,
    totalPages: number,
    setPage: Dispatch<SetStateAction<number>>
}