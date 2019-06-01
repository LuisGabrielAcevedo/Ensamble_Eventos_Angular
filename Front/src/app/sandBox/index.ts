import { Store } from '@ngrx/store';

import * as fromRoot from '../store/';

export abstract class Sandbox {

    constructor(protected store: Store<fromRoot.State>) {}
}