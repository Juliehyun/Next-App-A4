import useSWR from 'swr';
import Error from 'next/error';
import Card from 'react-bootstrap/Card';

export default function ArtworkCardDetail({objectID}) {

    const {data, error} = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
    if(error) {
        return <Error statusCode={404} />;
    }
    if(!data) return null;

    const {
        primaryImage,
        title,
        objectDate,
        classification,
        medium,
        artistDisplayName,
        artistWikidata_URL,
        creditLine,
        dimensions
    } = data;

    return (
        <Card>
            <Card.Img variant="top" src={primaryImage  || "https://via.placeholder.com/375x375.png?text=[+Not+Available+]"}/>
            <Card.Body>
                <Card.Title>{title || "N/A"}</Card.Title>
                <Card.Text> 
                    <strong>Date: </strong>{objectDate || "N/A"} <br/> 
                    <strong>Classification: </strong>{classification || "N/A" } <br/>
                    <strong>Medium: </strong>{medium || "N/A"}
                    <br/><br/>
                    <strong>Artist: </strong> {artistDisplayName || "N/A"} 
                    {
                        artistWikidata_URL ? ( 
                            <a href={artistWikidata_URL} target="_blank" rel="noreferrer">(wiki)</a>
                        ) : null
                    }
                    <br/>
                    <strong>Credit Line: </strong>{creditLine  || "N/A"} <br/>
                    <strong>Dimensions: </strong>{dimensions || "N/A"}
                </Card.Text>
            </Card.Body>
        </Card>
      );

}
