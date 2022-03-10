export const httpClient = async (...args: [input: RequestInfo, init?: RequestInit | undefined]) => {
    const response = await fetch(...args)

    if (response.ok) return await response.json()

    const errorMsg = await response.text()

    throw new Error(errorMsg)
}

export const purifyText = (text: string = '') => text.replaceAll('-', ' ')

export const getImgQueryString = (page: number, topic: string, search: string = '') => (
    `page=${page}&per_page=50${topic ? '&topic=' + topic : ''}${search.length >= 3 ? '&search_text=' + search.trim().toLowerCase() : ''}`
)

export const getTopicQueryString = (page: number) => (
    `page=${page}&per_page=30`
)

export const getFilledArray = (size: number) => {
    const arr = [];

    for (let i = 0; i < size; i++) { arr.push(0) }

    return arr
}

export const swrConfig = { shouldRetryOnError: false, revalidateOnFocus: false };