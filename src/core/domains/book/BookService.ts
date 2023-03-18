/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-console */

import { CreateBook, DeleteBook, GetBook, GetBooks, Book } from '@/core/models/book';

export interface IBookService {
  createBook: ({ title, description, image, authorId }: CreateBook) => Promise<Book>;
  getBook: ({ id }: GetBook) => Promise<Book | null>;
  getBooks: ({ authorId }: GetBooks) => Promise<Book[]>;
  deleteBook: ({ id }: DeleteBook) => Promise<void>;
}

const host = process.env.HOST_NAME as string;

export default class BookService implements IBookService {
  async createBook({ title, description, image, authorId }: CreateBook): Promise<Book> {
    return fetch(`${host}/api/books`, {
      method: 'POST',
      body: JSON.stringify({ title, description, image, authorId }),
    })
      .then(async (response) => {
        if (!response.ok) {
          console.error('response.ok:', response.ok);
          console.error('response.status:', response.status);
          console.error('response.statusText:', response.statusText);
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  async getBook({ id }: GetBook): Promise<Book | null> {
    return fetch(`${host}/api/books/${id}}`, { method: 'GET' })
      .then(async (response) => {
        if (!response.ok) {
          console.error('response.ok:', response.ok);
          console.error('response.status:', response.status);
          console.error('response.statusText:', response.statusText);
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  async getBooks({ authorId }: GetBooks): Promise<Book[]> {
    return fetch(`${host}/api/users/${authorId}/books}`, { method: 'GET' })
      .then(async (response) => {
        if (!response.ok) {
          console.error('response.ok:', response.ok);
          console.error('response.status:', response.status);
          console.error('response.statusText:', response.statusText);
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  async deleteBook({ id }: DeleteBook): Promise<void> {
    return fetch(`${host}/api/books/${id}`, { method: 'DELETE' })
      .then(async (response) => {
        if (!response.ok) {
          console.error('response.ok:', response.ok);
          console.error('response.status:', response.status);
          console.error('response.statusText:', response.statusText);
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}