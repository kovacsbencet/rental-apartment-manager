import { Button, Dialog, IconButton } from '@radix-ui/themes';
import { Cross1Icon } from '@radix-ui/react-icons';
import DeleteIssueButton from './DeleteIssueButton';

const DeleteIssueDialog = ({ issueID } : { issueID: number }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
      <IconButton size={'1'} radius='large' color='crimson' >
        <Cross1Icon width='15' height='15'/>
      </IconButton>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title >
          Biztos törölni szeretnéd ezt a teendőt?
        </Dialog.Title>
        <Dialog.Description>
          A törlés végleges és nem visszaállítható.
        </Dialog.Description>
        <DeleteIssueButton issueID={issueID}/>
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Close
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default DeleteIssueDialog;