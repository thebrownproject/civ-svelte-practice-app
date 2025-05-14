import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }: { params: any }) => {
  return { id: params.slug }
  error(404, 'Not found');
};
