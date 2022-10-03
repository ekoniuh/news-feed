import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '@features/articleItem/types';

type InitialState = Record<number, Article[]>;

const initialState: InitialState = {};

export const categoryArticlesSlice = createSlice({
  name: 'categoryArticles',
  initialState,
  reducers: {
    setCategoryArticles: (state, action: PayloadAction<{ id: number; articles: Article[] }>) => {
      state[action.payload.id] = action.payload.articles.filter((article) => article.title.length > 0);
    },
  },
});

export const { setCategoryArticles } = categoryArticlesSlice.actions;

export default categoryArticlesSlice.reducer;
