import axios, { type AxiosResponse } from 'axios'
import type Category from '../types/category.type'
import type Question from '../types/question.type'
import { decode } from 'html-entities'

export async function getQuestion(): Promise<Question> {
  const response = await axios.get('https://opentdb.com/api.php?amount=1')
  response.data.results[0].question = decode(response.data.results[0].question)
  const question = response.data.results[0]
  return question
}

export async function getQuiz(category: string): Promise<Question[]> {
  const response: AxiosResponse = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${category}`
  )
  const quiz = response.data.results.map((element: any) => {
    return {
      ...element,
      question: decode(element.question),
      answers: [
        ...element.incorrect_answers.map((answer: string) => decode(answer)),
        decode(element.correct_answer),
      ].sort((a, b) => 0.5 - Math.random()),
    }
  })
  return quiz
}

export async function getCategories(): Promise<Category[]> {
  const response = await axios.get('https://opentdb.com/api_category.php')
  const categories = response.data.trivia_categories
  return categories
}
