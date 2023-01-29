import axios, { AxiosError, AxiosResponse } from "axios";
import Category from "../types/category.type";
import Question from "../types/question.type";

export async function getQuestion(): Promise<Question> {
    const response = await axios.get(`https://opentdb.com/api.php?amount=1`);
    response.data.results[0].question = response.data.results[0].question
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&eacute;/g, "é");

    const question = response.data.results[0];
    console.log(question);
    return question;
}

export async function getQuiz(): Promise<Question[]> {
    const response = await axios.get(`https://opentdb.com/api.php?amount=10`);
    const quiz = response.data.results.map((question: any) => {
        return question.question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&eacute;/g, "é");
    });
    console.log(quiz);
    return quiz;
}

export async function getCategories(): Promise<Category[]> {
    const response = await axios.get(`https://opentdb.com/api_category.php`);
    const categories = response.data.trivia_categories;
    console.log(categories);
    return categories;
}
