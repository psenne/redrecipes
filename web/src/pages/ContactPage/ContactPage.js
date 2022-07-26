import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  useForm
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thanks for your message!')
      formMethods.reset()
    },
  })

  function SubmitForm(data) {
    createContact({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />
      <Form
        onSubmit={SubmitForm}
        config={{ mode: 'onBlur' }}
        formMethods={formMethods}
      >
        <Label errorClassName="error" name="name">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError className="error" name="name" />

        <Label errorClassName="error" name="email">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError className="error" name="email" />

        <Label errorClassName="error" name="message">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError className="error" name="message" />

        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </>
  )
}

export default ContactPage
