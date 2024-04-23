import prisma from '@/prisma/client';
import { Heading, Table } from '@radix-ui/themes';

const Issues = async () => {
  const issues = await prisma.issue.findMany({
    include: { comments: true }
  })
  

  return (
    <div className='p-4'>
      <Heading size={'4'}>Teendők</Heading>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
              <Table.ColumnHeaderCell>Sorszám</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Felelős</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Típus</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Státusz</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Határidő</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues?.map(issue => (
            <Table.Row key={issue.id} align={'center'}>
              <Table.Cell>{issue.id}</Table.Cell>
              <Table.Cell>{issue.agentID}</Table.Cell>
              <Table.Cell>{issue.type}</Table.Cell>
              <Table.Cell>{issue.status}</Table.Cell>
              <Table.Cell>{'2024.04.20.'}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default Issues;