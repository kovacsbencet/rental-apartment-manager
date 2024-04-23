import CommentCard from './CommentCard';
import * as ScrollArea from '@radix-ui/react-scroll-area';

interface Comment {
  id: number;
  issueID: number;
  agentID: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const CommentList = ({ comments } : { comments: Comment[] }) => {
  return (
    <ScrollArea.Root className="w-full h-[300px] rounded overflow-hidden border-solid border-2 border-zinc-300">
      <ScrollArea.Viewport className='w-full h-full p-4'>
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>

    </ScrollArea.Root>
  )};


export default CommentList;
