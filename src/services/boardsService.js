import axios from 'axios';

class BoardsService {
    
    constructor() {
        this.axiosInstance = new axios.create({
            baseURL: 'https://api.trello.com/1'
        });
    }

    getBoardsTrello = () => {

        const params = {
            key     : 'a341ec65dcb1a3d85276e5b7f49abbfa',
            token   :  '1f919d3f16e96739758e0ceaf49e397317b9339f66016c72e98a673930d927d9'
        };

        const config = {
            params: params,
        };

        return this.axiosInstance.get('members/me/boards', config);

    }
    
}

export default BoardsService;