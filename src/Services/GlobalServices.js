import axios from "axios";

import { apiEndPoint, blogApiEndPoint,blogApiEndPoint1 } from "../config.json";

let uniqueRegionsUrl = apiEndPoint + "getUniqueRegions/";
let uniqueTagsUrl = apiEndPoint + "getUniqueTags/";
let blogUrl = blogApiEndPoint + "blog/";
let blogCategoryUrl = blogApiEndPoint + "category/";
let blogRecentUrl = blogApiEndPoint + "recent-blogs";  
let advanceSearchUrl = apiEndPoint + "getSearchResults||";

let blog1RecentUrl = blogApiEndPoint1 + "recent-blogs1"; 

export async function getUniqueRegions() {
  return await axios({
    method: "get",
    url: uniqueRegionsUrl,
  });
}
export async function getBlogList(page=1) {
  return await axios({
    method: "get",
    url: blogUrl+`?page=${page}`,
  });
}
export async function getSingleBlogList(id) {
  return await axios({
    method: "get",
    url: blogUrl+`${id}/`,
  });
}
export async function getBlogCategoryList() {
  return await axios({
    method: "get",
    url: blogCategoryUrl,
  });
}

export async function getBlog1() {
  return await axios({
    method: "get",
    url: blog1RecentUrl,
  });
}


export async function getBlogRecentList() {
  return await axios({
    method: "get",
    url: blogRecentUrl,
  });
}
export async function getUniqueTags() {
  return await axios({
    method: "get",
    url: uniqueTagsUrl,
  });
}

export async function getAdvanceSearchResult(customDate, countries, tags) {
  return await axios({
    method: "get",
    url: advanceSearchUrl + customDate + "||" + countries + "||" + tags + "/",
  });
}

export async function getUserLocation() {
  return await axios({
    method: "get",
    url: "https://ip.nf/me.json",
  });
}