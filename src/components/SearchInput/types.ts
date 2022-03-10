import { ChangeEvent } from "react"

export type SearchInputProps = {
    search: string,
    placeholder?: string,
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
}