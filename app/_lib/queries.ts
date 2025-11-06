import * as Types from './types'

const qs = require('qs')

const endpoint = (query: string, params = {}) => {
  return process.env.API_ENDPOINT + query + '?' + qs.stringify(params, {
    encodeValuesOnly: true, // prettify URL
  })
}

const requestApiBackend = async <T>(endpoint: string): Promise<Types.serverResponse<T>> => {
  const header = {
    Authorization:
      'Bearer ' + process.env.API_TOKEN,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
  // console.log(header)
  const req = await fetch(endpoint, { headers: header, cache: 'no-store' })
  if (req.status === 401) {
    throw new Error('Unauthorized: Invalid API token or session expired');
  }
  let data = await req.json()
  return data
}

/**
 * 
 * Queries the API backend 
 */
export async function loadShops(): Promise<Types.Shop[] | null> {
  const data: Types.Shop[] = await requestApiBackend(endpoint('query/shop', {}));
  return data;
}

export async function loadShop({slug}:{slug:string}): Promise<Types.serverResponse<Types.Shop> | null> {
  const data: Types.serverResponse<Types.Shop> = await requestApiBackend(endpoint(`query/shop/shops/${slug}`, {}));
  return data;
}