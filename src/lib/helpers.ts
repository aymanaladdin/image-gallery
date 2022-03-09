export const httpClient = async (...args: [input: RequestInfo, init?: RequestInit | undefined]) => {
    const response = await fetch(...args)

    if (response.ok) return await response.json()

    const errorMsg = await response.text()

    throw new Error(errorMsg)
}

export const purifyText = (text: string = '') => text.replaceAll('-', ' ')