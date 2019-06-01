
export interface IDataBaseSearchCollection {
    titulo: string;
    tipo: string;
    items: number;
    paginas: number;
    paginaActual: number;
    menuTabla: string[]
    data: string[];
}

export interface IDataBaseSearchIdCollection {
    data: string;
}

export interface dataCollectionRequest {
    dataRequest: {
        data: {
            tipo: string;
            itemsPerPage: string;
        },
        page: number;
    }
}

export interface dataIdCollectionRequest {
    id: string;
    tipo: string;
}