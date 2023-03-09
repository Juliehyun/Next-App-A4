import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MainNav(props) {

    const [searchField, setSearchField] = useState('');
    const router = useRouter();

    function submitSearch(e) {
      e.preventDefault();
      router.push(`/artwork?title=true&q=${searchField}`);
    }

  return (
    <>
    <Navbar bg="green" expand="lg" className='fixed-top navbar-dark bg-primary'>
      <Container pt-3>
        <Navbar.Brand>Jihyun Nam</Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} >
          <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
            <Link href="/search" passHref legacyBehavior><Nav.Link>Advanced Search</Nav.Link></Link>
          </Nav>
          <Form className="d-flex" onSubmit = {submitSearch}>
            <FormControl  type="search" name = "search" placeholder="Search" className="me-2" 
              value={searchField} 
              onChange={(e) => setSearchField(e.target.value)} />
            <Button variant="success" type="submit">Search</Button>
          </Form>
      </Container>
    </Navbar>
    <br/>
    <br/>
    <br/>
    </>
  );
}