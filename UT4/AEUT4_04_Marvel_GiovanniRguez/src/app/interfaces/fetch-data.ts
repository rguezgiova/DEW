/**
 * Interfaz para recoger los parámetros de la API
 */
export interface FetchData {
  data: [{
    id: number,
    title: string,
    release_date: string,
    box_office: string,
    duration: number,
    overview: string,
    cover_url: string,
    trailer_url: string,
    directed_by: string,
    phase: number,
    saga: string,
    chonology: number,
    post_credit_scenes: number,
    imdb_id: string
  }];
}
