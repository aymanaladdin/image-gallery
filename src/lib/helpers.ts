export const httpClient = async (...args: [input: RequestInfo, init?: RequestInit | undefined]) => {
    const response = await fetch(...args)

    if (response.ok) return await response.json()

    const errorMsg = await response.text()

    throw new Error(errorMsg)
}

export const purifyText = (text: string = '') => text.replaceAll('-', ' ')

export const getImgQuerystring = (page: number, topic: string, search: string = '') => (
    `page=${page}&per_page=10${topic ? '&topic=' + topic : ''}${search.length >= 3 ? '&search_text=' + search.trim().toLowerCase() : ''}`
)

export const swrConfig = { shouldRetryOnError: false, revalidateOnFocus: false };