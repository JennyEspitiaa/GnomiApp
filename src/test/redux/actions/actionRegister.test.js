
import { LoginSync, logoutSync } from "../../../redux/actions/actionRegister"
import { typesLogin } from "../../../redux/types/types"

describe('Actions del login',()=>{
    test('Sync Login', ()=>{
        const email = 'jennyme_792@hotmail.com'
        const password = 'Zizou2022*'

        const actionLogin = LoginSync( email, password );

        expect( actionLogin ).toEqual({
            type: typesLogin.login,
            payload: {
                email,password
            }
        });
    }),
    test('Log out', ()=>{
        const email = 'jennyme_792@hotmail.com'
        const password = 'Zizou2022*'

        const actionLogout = logoutSync( email, password);

        expect( actionLogout ).toEqual({
            type: typesLogin.logout,
        });
    })
})