const BASE_URL = process.env.NEXT_PUBLIC_COINGECKO_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;

if (!BASE_URL) {
    console.error('NEXT_PUBLIC_COINGECKO_BASE_URL is not configured');
}

export async function clientFetcher<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean | undefined>,
): Promise<T> {

         if (!BASE_URL) {
        throw new Error('NEXT_PUBLIC_COINGECKO_BASE_URL is not configured');
    }


    const query = new URLSearchParams();
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                query.append(key, String(value));
            }
        });
    }
    // Add API key as query param for browser requests
    if (API_KEY) query.append('x_cg_demo_api_key', API_KEY);
    
    const url = `${BASE_URL}${endpoint}?${query.toString()}`;
    const response = await fetch(url, {
        signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
}