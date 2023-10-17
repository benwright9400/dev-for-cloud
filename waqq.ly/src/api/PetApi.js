import { API } from "aws-amplify";

const apiName = "Pet"
const path = '/resources/pets'; 

class PetAPI {

    static create = async function(obj) {
        
        try {
            
            let res = await API.post(apiName, path, {body: obj});
        
            console.log(res);

            if(res.failure) {
                console.log(res.failure);

                return [];
            }

            return res.success;

        } catch (error) {
            
            console.log(error);

            return [];
        }

    }

    static update = async function(obj) {

        try {

            console.log(obj);
            
            let res = await API.post(apiName, path, {body: obj});

            console.log(res);

            if(res.failure) {
                console.log(res.failure);

                return [];
            }

            return res.success;

        } catch (error) {
            
            console.log(error);

            return [];
        }

    }

    static deletePet = async function(obj) {
        
        try {
            
            let res = await API.del(apiName, path, { body: obj});

            if(res.failure) {
                console.log(res.failure);

                return [];
            }

            return res.success;

        } catch (error) {
            
            console.log(error);

            return [];
        }

    }

    static searchPets = async function(filters) {

        try {
            
            let res = await API.get(apiName, path, { queryStringParameters: {...filters}});

            console.log(res);

            if(res.failure) {
                console.log(res.failure);

                return [];
            }

            return res.success;

        } catch (error) {
            
            console.log(error);

            return [];
        }
        
    }

}

export default PetAPI;