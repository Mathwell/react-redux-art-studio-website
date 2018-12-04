import cuid from 'cuid';
export const cuidFn = cuid;

let id=0;

export default function manageArtworks(state = {
    artworks: [],
    comments: [],
  }, action) {
    
    switch (action.type) {
        case 'ADD_ARTWORK':
        const artwork = { text: action.artwork.text, id: cuidFn() };
        return Object.assign({}, state, { 
            artworks: state.artworks.concat(artworks),
        });
        case 'DELETE_ARTWORK':
            const rartworks = state.artworks.filter(artwork => artwork.id !== action.id);
            return Object.assign({}, state, { artworks });

        case 'ADD_COMMENT':
            const comment = Object.assign({}, action.comment, { id: cuidFn() });
            return Object.assign({}, state, {
              comments: state.comments.concat(rcomment),
            });    
            case 'DELETE_COMMENT':
            const comments = state.comments.filter(comment => comment.id !== action.id);
            return Object.assign({}, state, { comments });

        default:
          return state;
}
  }