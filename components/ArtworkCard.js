import useSWR from 'swr';
import Error from 'next/error';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function ArtworkCard({objectID}) {

    const { data, error } = useSWR(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    );
    if(error) {
        return <Error statusCode={404} />;
    }
    if(!data)  return null;

    const {
        title,
        primaryImageSmall,
        objectDate,
        classification,
        medium
    } = data;

    return (
        <Card>  
            <Card.Img variant="top" src={primaryImageSmall || 'https://via.placeholder.com/375x375.png?text=[+Not+Available+]'}/>
          
          <Card.Body>
            <Card.Title>{title || 'N/A'}</Card.Title>
            <Card.Text >
                {`Date: ${objectDate || 'N/A'}`} <br />
                {`Classification: ${classification || 'N/A'}`} <br />
                {`Medium: ${medium || 'N/A'}`}
            </Card.Text>
            
            <Link href={`/artwork/${objectID}`}passHref>
                <Button variant="outline-secondary">ID:{objectID}</Button>
            </Link>
          </Card.Body>
        </Card>
      );

};
