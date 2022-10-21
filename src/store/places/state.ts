import { Feature } from '@/interfaces/places';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; // longitud, latitud
    userLocationS?:[string];
    isLoadingPlaces: boolean;
    places: Feature[],
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
        userLocationS: undefined,
        isLoadingPlaces: false,
        places: [],
    }
}

export default state;