import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
    id: number;
    text: string;
}

interface BlogState {
    likes: number;
    comments: Comment[];
}

const initialState: BlogState = {
    likes: 0,
    comments: []
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setInitialState: (state, action: PayloadAction<BlogState>) => {
            state.likes = action.payload.likes;
            state.comments = action.payload.comments;
        },
        increase: state => {
            state.likes += 1;
        },
        decrement: state => {
            if (state.likes > 0) {
                state.likes -= 1;
            }
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload);
        },
        deleteComment: (state, action: PayloadAction<number>) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        }
    },
});

export const { setInitialState, increase, decrement, addComment, deleteComment } = blogSlice.actions;
export default blogSlice.reducer;