import prisma from '@/prisma/client';
import { Box, Grid, Heading, Text} from '@radix-ui/themes';
import IssuesList from '@/components/issues/IssuesList';
import AddNewIssueDialog from '@/components/issues/AddNewIssueDialog';
import AddNewTenantDialog from '@/components/tenants/AddNewTenantDialog';

const PropertyDetailPage = async ({params} : { params: { id: string }}) => {
  const propertyID = parseInt(params.id)
  const property = await prisma.property.findUnique({
    where: {id: propertyID},
    include: { owner: true, agent: true, tenant: true }
  })

  return (
    <div className='w-full p-4'>
      <Grid columns="2" gap="2" rows="1" width="auto">
        <Box width={'750px'}>
          <Heading size={'4'}>Ingatlan adatai</Heading>
          <p>Tulajdonos: {property?.owner?.name}</p>
        </Box>
        <Box width={'250px'}>
          <Heading size={'4'}>Bérlő adatai</Heading>
          {property?.tenant ?
          <Box className='flex flex-col'>
            <p>{property.tenant.name}</p>
            <p>{property.tenant.phone}</p>
            <p>{property.tenant.email}</p>
          </Box> :
          <Box>
            <Text>Jelenleg nincs bérlő.</Text>
            <AddNewTenantDialog propertyId={propertyID}/>
          </Box>}
        </Box>
      </Grid>  
      <Box width={'750px'}>
        <AddNewIssueDialog propertyID={propertyID}/>
        <IssuesList propertyID={propertyID}/>
      </Box>
    </div>
  )
}

export default PropertyDetailPage;