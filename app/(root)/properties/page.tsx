'use client'
import Toolbar from '@/components/toolbar/toolbar';
import PropertiesTable from '@/components/properties/PropertiesTable';
import { getEncodedSearchQuery } from '@/utils/searchUtils'

const Properties = async () => {
  const encodedSearchQuery = getEncodedSearchQuery();
  console.log(encodedSearchQuery)
  
  return (
    <div className='p-4'>
      <Toolbar/>
      <PropertiesTable encodedSearchQuery={encodedSearchQuery} />
    </div>
  )
}

export default Properties;