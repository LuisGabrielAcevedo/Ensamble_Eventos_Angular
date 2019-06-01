import { createSelector } from 'reselect';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// Reducers
import { environment as ENV } from '../../environments/environment';
import * as fromArtist from './artistas/artistas.reducer';
import * as fromDataBase from './dataBase/dataBase.reducer';
import * as fromPlayer from './player/player.reducer';
import * as fromUser from './users/users.reducer';
// Estados del store
export interface State {
    artist: fromArtist.ArtistState;
    dataBase: fromDataBase.DataBaseState;
    player: fromPlayer.PlayerState;
    user: fromUser.UserState;
}

// Reducers para modificar los estados
export const reducers: ActionReducerMap<State> = {
    artist: fromArtist.ArtistReducer,
    dataBase: fromDataBase.DataBaseReducer,
    player: fromPlayer.PlayerReducer,
    user: fromUser.UserReducer
};

// Meta reducers
export const metaReducers: MetaReducer<State>[] = !ENV.production
    // ? [storeFreeze]
    ? []
    : [];

// Constantes para obtener los estados desde los componentes
export const getArtistState = (state: State) => state.artist;
export const getDataBaseState = (state: State) => state.dataBase;
export const getPlayerState = (state: State) => state.player;
export const getUserState = (state: State) => state.user;

// Selectores
// Artista
export const getArtist = createSelector(getArtistState, fromArtist.getArtist);
export const getArtistInformation = createSelector(getArtistState, fromArtist.getArtistInformation);
export const getLoSigo = createSelector(getArtistState, fromArtist.getLoSiguo);
export const getMeSigue = createSelector(getArtistState, fromArtist.getMeSigue);
// Data Base
export const getType = createSelector(getDataBaseState, fromDataBase.getType);
export const getItemsPerPage = createSelector(getDataBaseState, fromDataBase.getItemsPerPage);
export const getPage = createSelector(getDataBaseState, fromDataBase.getPage);
export const getDataCollection = createSelector(getDataBaseState, fromDataBase.getDataCollection);
export const getDataIdCollection = createSelector(getDataBaseState, fromDataBase.getDataIdCollection);
export const getIsLoading = createSelector(getDataBaseState, fromDataBase.getIsLoading);
export const getIsLoadingId = createSelector(getDataBaseState, fromDataBase.getIsLoadingId);
// Player
export const getCancionActual = createSelector(getPlayerState, fromPlayer.getCancionActual);
export const getPlay = createSelector(getPlayerState, fromPlayer.getPlay);
export const getPLayList = createSelector(getPlayerState, fromPlayer.getPlayList);
export const getIsLoadingPlayer = createSelector(getPlayerState, fromPlayer.getIsLoading);
// User
export const getIdentity = createSelector(getUserState, fromUser.getIdentity);
export const getArtistInformationProfile = createSelector(getUserState, fromUser.getArtistInformation);
export const getToken = createSelector(getUserState, fromUser.getToken);
export const getFollowing = createSelector(getUserState, fromUser.getFollowing);
export const getFollowed = createSelector(getUserState, fromUser.getFollowed);
export const getSocketUserId = createSelector(getUserState, fromUser.getSocketUserId);
