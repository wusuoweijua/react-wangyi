import ajax from './ajax'
export const getindexCateModule = () => ajax({
  url:'/api/getindexCateModule'
})
export const getindexDatas = () => ajax({
  url:'/api/getIndexDatas'
})
export const getSearch = ()=> ajax({
  url:'/api/getSearch'
})
export const getSearchKeyWord =(value) =>ajax({
  url:'/foo/xhr/search/searchAutoComplete.json',
  method:'POST',
  data:{
    keywordPrefix:value
  }
})
export const getClass = () =>ajax({
  url:'/api/getClassList'
})
export const getCateList = ()=> ajax({
  url:'/api/getCateList'
})

export const getBuyList = ()=> ajax({
  url:'/foo/topic/v1/know/navWap.json'
})