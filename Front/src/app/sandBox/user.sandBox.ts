import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as UserActions from '../store/users/users.action';
import * as fromRoot from '../store';
import { Sandbox } from './index';
import { IUsuario } from '../models/usuario';
import { IArtistInformation } from '../models/informacionArtista';

@Injectable()
export class UserSandbox extends Sandbox {
    constructor(protected store: Store<fromRoot.State>) {
        super(store);
    }
    fetchIdentity(): Observable<IUsuario> {
        return this.store.select(fromRoot.getIdentity);
    }
    fetchArtistInformation(): Observable<IArtistInformation> {
        return this.store.select(fromRoot.getArtistInformationProfile);
    }
    fetchSocketId(): Observable<string> {
        return this.store.select(fromRoot.getSocketUserId);
    }
    fetchToken(): Observable<string> {
        return this.store.select(fromRoot.getToken);
    }
    fetchFollowing(): Observable<string[]> {
        return this.store.select(fromRoot.getFollowing);
    }
    fetchFollowed(): Observable<string[]> {
        return this.store.select(fromRoot.getFollowed);
    }
    loadUser(data: IUsuario): void {
        return this.store.dispatch(new UserActions.LoadUserAction(data));
    }
    loadArtistInformation(data: IArtistInformation): void {
        return this.store.dispatch(new UserActions.LoadArtistInformationAction(data));
    }
    loadSocketId(id: string): void {
        return this.store.dispatch(new UserActions.LoadSocketIdAction(id));
    }
    deleteSocketId(): void {
        return this.store.dispatch(new UserActions.DeleteSocketIdAction(null));
    }
    deleteArtistInformation(): void {
        return this.store.dispatch(new UserActions.DeleteArtistInformationAction(null));
    }
    deleteUser(): void {
        return this.store.dispatch(new UserActions.DeteleUserAction(null));
    }
    loadFollowing(data: string[]): void {
        return this.store.dispatch(new UserActions.LoadFollowingAction(data));
    }
    loadToken(data: string): void {
        return this.store.dispatch(new UserActions.LoadTokenAction(data));
    }
    addFollowing(data: string): void {
        return this.store.dispatch(new UserActions.AddFollowingAction(data));
    }
    deleteFollowing(data: string): void {
        return this.store.dispatch(new UserActions.DeleteFollowingAction(data));
    }
    deleteAllFollowing(): void {
        return this.store.dispatch(new UserActions.DeleteAllFollowingAction());
    }
    loadFollowed(data: string[]): void {
        return this.store.dispatch(new UserActions.LoadFollowedAction(data));
    }
    addFollowed(data: string): void {
        return this.store.dispatch(new UserActions.AddFollowedAction(data));
    }
    deleteFollowed(data: string): void {
        return this.store.dispatch(new UserActions.DeleteFollowedAction(data));
    }
    deleteAllFollowed(): void {
        return this.store.dispatch(new UserActions.DeleteAllFollowingAction());
    }
    deleteToken(): void {
        return this.store.dispatch(new UserActions.DeleteTokenAction(null));
    }
}
