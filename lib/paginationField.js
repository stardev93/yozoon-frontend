import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tels apollo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      // read the number of items in the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      if (items.length && items.length !== first && page === pages) {
        // check if there is items AND if items numbers
        // not equal to number requested and we are in the last page
        // and just send them any way
        return items;
      }

      if (items.length !== first) {
        // don't have any items , we must go to fetch them from network
        return false;
      }
      // if there are items just return them from the cache
      if (items.length) {
        return items;
      }
      return false; // fallback to network
    },
    merge(existing, incoming, { args }) {
      // this works when the apollo client comes back from the network with our products
      const { skip, first } = args;

      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }

      return merged;
    },
  };
}
