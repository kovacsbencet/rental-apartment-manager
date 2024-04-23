'use client'
import IssueCard from './IssueCard';
import useSWR from 'swr';

const fetcher = async (url: any) => {
  const response = await fetch(url);
  const data = await response.json();
  if (!data.success) {
    throw new Error('Failed to fetch issues');
  }
  return data;
};

interface Issue {
  id: number;
  type: string;
  status: string;
  description: string;
  comments: [];
}

const IssuesList = ({propertyID} : { propertyID: number }) => {
  let { data, error } = useSWR(`http://localhost:3000/api/properties/${propertyID}`, fetcher)
  if (error) return <div>Error fetching issues: {error.message}</div>;
  if (!data) return <div>Loading issues...</div>;
  const issues = data.property.issues

  return (
    <>
      {issues.map((issue: Issue) => 
        <IssueCard key={issue.id} issue={issue}/>
      )}
    </>
  )
}

export default IssuesList;