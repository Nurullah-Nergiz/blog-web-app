import { searchInstance } from "./index";

export const getSearch = (query) => searchInstance(`search/?q=${query}`);
