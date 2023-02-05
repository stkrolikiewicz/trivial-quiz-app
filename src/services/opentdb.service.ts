import axios, { type AxiosResponse } from 'axios'
import type Category from '../types/category.type'
import type Question from '../types/question.type'

export async function getQuestion (): Promise<Question> {
  const response = await axios.get('https://opentdb.com/api.php?amount=1')
  response.data.results[0].question = response.data.results[0].question
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&eacute;/g, 'é')

  const question = response.data.results[0]
  console.log(question)
  return question
}

export async function getQuiz (category: string): Promise<Question[]> {
  const response: AxiosResponse = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}`
  )
  const quiz = response.data.results
  // const quiz = response.data.results.map((element: any) => {
  //     return {
  //         ...element,
  //         question: element.question
  //             .replace(/&quot;/g, '"')
  //             .replace(/&#039;|&apos;|&lsquo;|&#39;|&rsquo;/g, "'")
  //             .replace(/&eacute;/g, 'é'),
  //         answers: [
  //             ...element.incorrect_answers.map((answer: string) =>
  //                 answer
  //                     .replace(/&quot;/g, '"')
  //                     .replace(/&#039;|&apos;|&lsquo;|&#39;|&rsquo;/g, "'")
  //                     .replace(/&eacute;/g, 'é')
  //             ),
  //             element.correct_answer
  //                 .replace(/&quot;/g, '"')
  //                 .replace(/&#039;|&apos;|&lsquo;|&#39;|&rsquo;/g, "'")
  //                 .replace(/&eacute;/g, 'é'),
  //         ].sort((a, b) => 0.5 - Math.random()),
  //     }
  // })
  // console.log(response.data)
  // console.log(quiz)
  return quiz
}

export async function getCategories (): Promise<Category[]> {
  const response = await axios.get('https://opentdb.com/api_category.php')
  const categories = response.data.trivia_categories
  console.log(response)
  console.log(categories)
  return categories
}
