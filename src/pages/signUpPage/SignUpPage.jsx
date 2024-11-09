function SignUpPage() {

/*    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");*/
  return (
    <div>
        <h1>Sign Up</h1>
      {/*<SignUpForm />*/}

        <Input
            labelInputLink="name"
            labelText="Membership"
            inputType="dropdown"
            inputName="name"
            validationRules={{ required: false }}
            register={register}
            errors={errors}
        />
    </div>
  );
}

export default SignUpPage;