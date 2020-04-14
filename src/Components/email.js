import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    alert('Thanks for contacting me Ill get back to asp')
    // eslint-disable-next-line 
    const { name, email, subject, message } = this.state 
    let templateParams = {
      from_name: name,
      from_mail: email,
      to_name: 'Cristo',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_jGZQQPWI',
       templateParams,
      'user_TncISap3dpmJyG5Ovpn9L'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <div>
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted"><p>Email address</p></Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted"><p>Name</p></Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted"><p>Subject</p></Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted"><p>Message</p></Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                required
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button color="success" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </div>
    )
  }
}
export default ContactForm