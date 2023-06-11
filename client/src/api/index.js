import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});
//axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
axios.interceptors.request.use(
     config =>{
         config.headers['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
         return config;
     },
     error =>{
         return Promise.reject(error);
     }
 );

// API.interceptors.request.use((req) =>{
//     if(localStorage.getItem('profile')){
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//         console.log(req.headers);
//     }
//     console.log(req.headers);
//     return req;
// });
//const url = 'http://localhost:5000/posts';

export const fetchPosts =()=>axios.get('/posts');
export const createPost = (newPost) => axios.post('/posts',newPost);
export const likePost = (id)=> axios.patch(`/posts/${id}/likePost`);
export const updatePost=(id,updatedPost) =>axios.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const signIn = (formData) =>API.post('/user/signin',formData);
export const signUp = (formData) =>API.post('/user/signup',formData);


// import axios from "axios";

// const entryGroup = async (privatekey, userid) => {
//   try {
//     return axios.post(
//       "http://xxxxx:3000/entrygroup",
//       { body: privatekey },
//       {
//         headers: {
//           Authorization: `Bearer ${userid}`,
//           Accept: "application/json",
//         },
//       }
//     ).then(res => res.data).catch(e => e);
//   } catch (e) {
//     return e;
//   }
// };

// export default entryGroup;