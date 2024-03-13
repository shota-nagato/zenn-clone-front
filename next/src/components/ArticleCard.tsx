import { ArticleCardType } from '@/types'
import { Box, Card, CardContent, Typography } from '@mui/material'

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const ArticleCard = (props: ArticleCardType) => {
  return (
    <Card>
      <CardContent>
        <Typography
          component='h3'
          sx={{
            mb: 2,
            minHeight: 48,
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 1.5,
          }}
        >
          {omit(props.title)(45)('...')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 12 }}>{props.userName}</Typography>
          <Typography sx={{ fontSize: 12 }}>{props.fromToday}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ArticleCard