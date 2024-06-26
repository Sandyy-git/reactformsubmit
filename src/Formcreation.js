import React, { useState } from "react";
import { Button, Form, FormLabel } from 'react-bootstrap';
import './Formcreation.css';
function Formcreation(){

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact ] = useState("");
    const [gender, setGender ] = useState("");
    const [subjects, setSubjects ] = useState("");
    const [resume, setresume ] = useState("");
    const [url, setUrl ] = useState("");
    const [about, setAbout ] = useState("");
    // console.log(firstname);
    return(
        <>
         <div className="centered-form">
            <h3 className="formhead"> Form in React </h3>
                <div className="form-container">
                    <Form>
                        <Form.Group controlId="formBasicfirstname">
                            <Form.Label >First Name</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter first name" name="firstname"
                            value={firstname}
                            onChange={(e) =>{
                                setFirstName(e.target.value)
                            }}
                             ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasiclastname">
                            <Form.Label >Last Name</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter last name" name="lastname"
                            value={lastname}
                            onChange={(e)=>{
                                setLastName(e.target.value)
                            }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicemail">
                            <Form.Label >Enter Email</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter Email" name="email"
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasiccontact">
                            <Form.Label >Contact</Form.Label>
                            <Form.Control size="sm" type="tel" placeholder="Enter Mobile number" name="contact" ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicgender">
                            <Form.Label>Gender</Form.Label>
                                <div className="form-choice">
                                    <Form.Check type="radio" name="gender" id="male" label="Male" />
                                    <Form.Check type="radio" name="gender" id="female" label="Female" />
                                    <Form.Check type="radio" name="gender" id="other" label="Other" />
                                </div>
                        </Form.Group>

                        <Form.Group controlId="formBasicsubject">
                            <Form.Label>Your best subject</Form.Label>
                                <div className="form-choice">
                                    <Form.Check type="checkbox" name="lang" id="english" label="English" />
                                    <Form.Check type="checkbox" name="lang" id="maths" label="Maths" />
                                    <Form.Check type="checkbox" name="lang" id="physics" label="Physics" />
                                    <Form.Check type="checkbox" name="lang" id="science" label="Science" />
                                </div>
                        </Form.Group>

                       <Form.Group controlId="formBasicresume">
                            <FormLabel>Update Resume</FormLabel>
                            <Form.Control size="sm" type="file"></Form.Control>
                       </Form.Group>

                        <Form.Group controlId="formBasicurl">
                            <FormLabel >Enter URL</FormLabel>
                            <Form.Control size="sm" type="text" placeholder="URL"></Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicchoice">
                            <FormLabel>Select Your Choice</FormLabel>
                            <Form.Select>
                                <option>Select Your Ans</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formBasicabout">
                            <FormLabel>About</FormLabel>
                            <Form.Control as="textarea" placeholder="about your self"></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <FormLabel>Submit or Reset</FormLabel>
                            <div className="btn-div">
                                <Button type="reset" className="btn-class" value="reset">Reset</Button>
                                <Button type="submit" className="btn-class" value="submit">Submit</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
         </div>
        </>
    )
}

export default Formcreation;