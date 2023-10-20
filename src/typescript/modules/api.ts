export interface CharacterAPI {
    id: number,
    firstName: string,
    lastName: string,
    fullName: string,
    title: string,
    family: string, 
    image: string,
    imageUrl: string 
}

export type ApiData = Array<CharacterAPI>

export async function fetchAPI(url: string):Promise<ApiData> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data:ApiData = await response.json();
        return data
    } catch (error) {
        throw new Error("Daten konnten nicht geladen werden")
    }
}