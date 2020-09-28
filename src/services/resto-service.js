import store from '../store';
import { serverError } from '../actions';
import reduser from '../reducers';


class RestoService {
    _apiBase = 'http://localhost:3000';

    async getResourse(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            reduser(store, serverError);
            throw new Error(`Could not fetch ${url}, response status: ${res.status}`);
        }

        return await res.json();
    }

    async getMenuItems(){
        return await this.getResourse('/menu/');
    }

    async getMenuItem(id){
        return await this.getResourse(`/menu/${id}`);
    }
}

export default RestoService;