import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2EyZmRiNTk4MTFiMjc5ZDRjYTZiMjU2NGZhYTA2YyIsIm5iZiI6MTc0NDQzODQ0Mi4xOTgwMDAyLCJzdWIiOiI2N2ZhMDRhYTFmM2JjZmVhNDhkOTBiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V2It-b4CNCAxuCPYKBCkKk86qbctT4bfm5bvCUthQxE'
  },
});

export default instance;