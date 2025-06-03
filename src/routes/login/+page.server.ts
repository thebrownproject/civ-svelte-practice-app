import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
    const currentLoginStatus = cookies.get('loginStatus');
    
    return {
        currentLoginStatus,
    };
};

export const actions = {
    Login: async ({ request, cookies }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        if (email === 'test@example.com' && password === 'password') {
            cookies.set('loginStatus', 'true', {
                path: '/',
                httpOnly: false,	
                secure: false,
            });
        } else {
            cookies.set('loginStatus', 'false', {
                path: '/',
                httpOnly: false,	
                secure: false,
            });
        }
        return { success: true };
    },
    
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

