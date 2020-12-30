import { MyTextField } from "./custom-material-ui-form.styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

//import asyncValidate from './asyncValidate'
//import { Field, reduxForm } from 'redux-form'

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <MyTextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);


export const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);

export const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
);

export const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: "color-native-simple",
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

// const MaterialUiForm = props => {
//   const { handleSubmit, pristine, reset, submitting, classes } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <Field
//           name="firstName"
//           component={renderMyTextField}
//           label="First Name"
//         />
//       </div>
//       <div>
//         <Field name="lastName" component={renderMyTextField} label="Last Name" />
//       </div>
//       <div>
//         <Field name="email" component={renderMyTextField} label="Email" />
//       </div>
//       <div>
//         <Field name="sex" component={radioButton}>
//           <Radio value="male" label="male" />
//           <Radio value="female" label="female" />
//         </Field>
//       </div>
//       <div>
//         <Field
//           classes={classes}
//           name="favoriteColor"
//           component={renderSelectField}
//           label="Favorite Color"
//         >
//           <option value="" />
//           <option value={'ff0000'}>Red</option>
//           <option value={'00ff00'}>Green</option>
//           <option value={'0000ff'}>Blue</option>
//         </Field>
//       </div>
//       <div>
//         <Field name="employed" component={renderCheckbox} label="Employed" />
//       </div>
//       <div />
//       <div>
//         <Field
//           name="notes"
//           component={renderMyTextField}
//           label="Notes"
//           multiline
//           rowsMax="4"
//           margin="normal"
//         />
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>
//           Submit
//         </button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   )
// }

// const validate = values => {
//   const errors = {}
//   const requiredFields = [
//     'firstName',
//     'lastName',
//     'email',
//     'favoriteColor',
//     'notes'
//   ]
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required'
//     }
//   })
//   if (
//     values.email &&
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address'
//   }
//   return errors
// }

// export default reduxForm({
//   form: 'MaterialUiForm', // a unique identifier for this form
//   validate,
//   asyncValidate
// })(MaterialUiForm)
