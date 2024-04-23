import { Box, Card, Heading, Text, Flex } from '@radix-ui/themes';
import useSWR from 'swr';

interface Comment {
  id: number;
  issueID: number;
  agentID: number;
  content: string;
  createdAt: string;
}

const fetcher = async (url: any) => {
    const response = await fetch(url);
    const data = await response.json();
    if (!data.success) {
      throw new Error('Failed to fetch issues');
    }
    return data;
};

const CommentCard = async ({ comment } : { comment: Comment }) => {
  
  let { data, error } = useSWR(`http://localhost:3000/api/agents/${comment.agentID}`, fetcher)

  if (error) return <div>Error fetching comment data</div>;
  if (!data) return <div>Loading comment...</div>;

  console.log(data)

  return (
    <Card className='bg-indigo-100 mt-4 mb-4 relative'>
      <Flex className='items-center'>
        <Heading size={'2'}>{data.agent.name}</Heading>
        <Text size={'2'}> {comment.createdAt}</Text>
      </Flex>
      <Text size={'2'}>{comment.content}</Text>
    </Card>
  )
}

export default CommentCard;