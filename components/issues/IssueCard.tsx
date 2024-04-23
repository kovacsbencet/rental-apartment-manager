import { Card, Heading, Text } from '@radix-ui/themes';
import DeleteIssueDialog from './DeleteIssueDialog';
import UpdateIssueDialog from './UpdateIssueDialog';

interface Issue {
  id: number;
  type: string;
  status: string;
  description: string;
}

const IssueCard = ({ issue } : { issue: Issue }) => {
  return (
    <Card className='bg-indigo-100 mt-4 mb-4 relative'>
      <Heading size='3'>{issue.type}</Heading>
      <Heading size='1'>{issue.status}</Heading>
      <Text as='p' size='2' className='mt-2 mb-2'>{issue.description}</Text>
      <div className='absolute top-3 right-3'>
        <DeleteIssueDialog issueID={issue.id}/>
      </div>
      <UpdateIssueDialog issue={issue}/>
    </Card>
  )
}

export default IssueCard;