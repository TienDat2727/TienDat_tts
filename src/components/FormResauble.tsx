import { FieldValue } from '../models';
import { Form, Input, Flex } from 'antd';
import { useForm } from 'antd/es/form/Form';
import ButtonForm from './ButtonForm';
import { TypeLoginForm, TypeRegisterForm } from '../models';

interface FormReusableProps {
  fieldValuesForm: FieldValue[];
  contentButton: string;
  onFinish: (values: T) => void;
}

const FormReusable = ({ fieldValuesForm, contentButton, onFinish }: FormReusableProps) => {
  const [form] = useForm();
  const handleFinish = (values: TypeLoginForm | TypeRegisterForm) => {
      onFinish(values);
      form.resetFields();
  }
  return (
    <Form form={form} onFinish={handleFinish}>
      <Flex vertical gap={12}>
        {fieldValuesForm.map((value: FieldValue) => (
          <Form.Item key={value.label} name={String(value.value)}>
            <Input placeholder={String(value.label)} className='input'/>
          </Form.Item>
        ))}
      </Flex>
      <ButtonForm content={contentButton}/>
    </Form>
  );
};

export default FormReusable;