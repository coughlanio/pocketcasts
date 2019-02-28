module.exports = [
  {
    name: 'getList',
    path: 'user/podcast/list',
    method: 'post',
  },
  {
    name: 'getNewReleases',
    path: 'user/new_releases',
    method: 'post',
  },
  {
    name: 'getInProgress',
    path: 'user/in_progress',
    method: 'post',
  },
  {
    name: 'getStarred',
    path: 'user/starred',
    method: 'post',
  },
  {
    name: 'getHistory',
    path: 'user/history',
    method: 'post',
  },
  {
    name: 'getStats',
    path: 'user/stats/summary',
    method: 'post',
  },
  {
    name: 'getRecommendedEpisodes',
    path: 'discover/recommend_episodes',
    method: 'post',
  },
  {
    name: 'getSearchResults',
    path: 'discover/search',
    method: 'post',
  },
  {
    name: 'getCategories',
    path: 'categories_v2',
    method: 'get',
  },
  {
    name: 'getContent',
    path: 'content',
    method: 'get',
  },
  {
    name: 'getFeatured',
    path: 'featured',
    method: 'get',
  },
  {
    name: 'getNetworkList',
    path: 'network_list_v2',
    method: 'get',
  },
  {
    name: 'getPopular',
    path: 'popular',
    method: 'get',
  },
  {
    name: 'getTrending',
    path: 'trending',
    method: 'get',
  },
];
