import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormInput } from '../../components/common/FormInput';
import withFormik from 'storybook-formik';
import * as yup from 'yup';

const testSchema = yup.object().shape({
  defaultInput: yup.string().required('Input is required!'),
});

export default {
  component: FormInput,
  title: 'Components/Common/FormInput',
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        defaultInput: '',
      },
      validationSchema: testSchema,
    },
  },
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  inputId: 'Default Input',
  label: 'This is a label',
  placeholder: 'This is a placeholder',
  type: 'text',
  required: testSchema.fields.defaultInput.spec.presence === 'required',
  disabled: false,
  value: Default.parameters?.formik.values.defaultInput,
  errors: Default.parameters?.formik.errors.defaultInput,
  touched: Default.parameters?.formik.touched.defaultInput,
  handleChange: Default.parameters?.formik.handleChange,
  handleBlur: Default.parameters?.formik.handleBlur,
};
