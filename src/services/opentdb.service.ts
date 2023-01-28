import axios, { AxiosError, AxiosResponse } from "axios";

export default class OpentdbService {
    async getQuestion(): Promise<string> {
        const rawResponse = await axios.get(
            `https://opentdb.com/api.php?amount=1`
        );
        const response = rawResponse.data.results[0].question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");
        console.log(response);
        return response;
    }
}
