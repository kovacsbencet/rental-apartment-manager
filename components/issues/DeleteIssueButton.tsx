'use client'
import { Button } from '@radix-ui/themes';

const DeleteIssueButton = ({ issueID } : { issueID: number }) => {
  return (
    <Button onClick={async () =>{
      await fetch(`http://localhost:3000/api/issues/${issueID}`, 
      { method: 'DELETE' })
      }}>
      Törlés
    </Button>
  )
}

export default DeleteIssueButton