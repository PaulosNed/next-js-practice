const dev = process.env.NODE_ENV !== 'production'

export const endpoint = dev ? 'http://localhost:4000/posts' : 'http://localhost:4000/posts'