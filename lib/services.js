import { getBaseUrl } from './api';

export async function loadPosts(env, locale) {
    const baseUrl = getBaseUrl(env)
    const res = await fetch(`${baseUrl}/v1/posts`, { headers: { "Accept-Language": locale } })
    const json = await res.json()
    return json.data
}

export async function loadLucasgouvea(env, locale) {
    const baseUrl = getBaseUrl(env)
    const res = await fetch(`${baseUrl}/v1/lucasgouvea`, { headers: { "Accept-Language": locale } })
    const json = await res.json()
    return json.data[0]
}