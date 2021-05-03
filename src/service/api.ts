import axios from "./axios";

export const fetchSearch = async (searchQuery, page, loadingMore) => {
    try {
        const result = await axios
            .get(`search?q=${searchQuery}&page=${page}&limit=${5}`, {
                // cancelToken: new CancelToken(function executor(c) {
                //     cancel = c;
                // }),
            })
            .catch((err: any) => {
                console.log('fetchSearch err = ', err, err.response);
                if (err && !!err.response) {
                    return Promise.reject(
                        new Error(err)
                    );
                }
                if (err.response) {
                    return Promise.reject(new Error(JSON.stringify(err.response.data)));
                }
                return Promise.reject(new Error(JSON.stringify(err)));
            });
        if (result) {
            return {...result.data, currentPage: page, loadingMore: loadingMore};
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};