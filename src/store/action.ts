import {ActionTree} from 'vuex'
import jwt_decode from 'jwt-decode';

const action:ActionTree<any,any> = {
    async setUser({commit},user:any) {
        let decoded: any = jwt_decode(user)
        commit('SET_USER', decoded)
    }
}
export default action;

