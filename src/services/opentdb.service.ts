import axios, { AxiosError, AxiosResponse } from "axios";

export async function getQuestion(): Promise<string> {
    const response = await axios.get(`https://opentdb.com/api.php?amount=1`);
    const question = response.data.results[0].question
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&eacute;/g, "é");
    console.log(question);
    return question;
}

export async function getQuiz(): Promise<string[]> {
    const response = await axios.get(`https://opentdb.com/api.php?amount=2`);
    const quiz = response.data.results.map((question: any) => {
        return question.question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&eacute;/g, "é");
    });
    console.log(quiz);
    return quiz;
}
