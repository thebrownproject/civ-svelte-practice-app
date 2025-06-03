import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
    const currentLoginStatus = cookies.get('loginStatus');
    
    return {
        currentLoginStatus
    };
};

export const actions = {
    LoginOn: async ({ cookies }) => {
        console.log("Setting cookie to 'true'")

        cookies.set('loginStatus', 'true', {
            path: '/',
            httpOnly: false,	
            secure: false,
        });
        
        return { success: true };
    },

    LoginOff: async ({ cookies }) => {
        console.log("Setting cookie to 'false'")

        cookies.set('loginStatus', 'false', {
            path: '/',
            httpOnly: false,	
            secure: false,
        });
        
        return { success: true };
    }
};

