import { useFetchWrapper } from "../utils/fetchWrapper";

const RequestService = ()=>{
    const fetchWrapper = useFetchWrapper();
    const baseURL = "/api/request";
    function sendRequest(requestData) {
        let url = `${baseURL}`;
        return fetchWrapper.post(url,requestData);
      }
    
      return {
        sendRequest
      };
}

export default RequestService;