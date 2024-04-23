import { useSearchParams } from 'next/navigation';

export const getEncodedSearchQuery = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get('q') : null;
  return encodeURI(searchQuery || '');
};
