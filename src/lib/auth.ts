import { browser } from '$app/environment';
import { goto } from '$app/navigation';

/**
 * Client-side cookie reading utility
 * Use this in your Svelte components for conditional fetching
 */
export function getCookie(name: string): string | null {
    if (!browser) return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
    }
    return null;
}

/**
 * Check if user is logged in (client-side)
 */
export function isLoggedIn(): boolean {
    return getCookie('isLoggedIn') === 'true';
}

/**
 * Redirect to login if not authenticated (client-side)
 */
export function requireAuth(): void {
    if (!isLoggedIn()) {
        goto('/login');
    }
}

/**
 * Client-side logout utility
 */
export function logout(): void {
    // Clear the cookie by setting it to expire immediately
    document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    goto('/login');
}
