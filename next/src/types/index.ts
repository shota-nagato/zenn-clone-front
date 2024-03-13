export type ArticleType = {
  id: number
  title: string
  createdAt: string
  fromToday: string
  user: {
    name: string
  }
}

export type ArticleCardType = {
  title: string
  fromToday: string
  userName: string
}
