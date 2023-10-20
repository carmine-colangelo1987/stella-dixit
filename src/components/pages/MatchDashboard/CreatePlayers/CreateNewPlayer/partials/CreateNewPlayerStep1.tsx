/** @format */

import { Controller, useForm } from 'react-hook-form';
import FormModule from '../../../../../common/FormModule';
import FormInput from '../../../../../common/FormInput';
import { StepProps } from '../../../../../../types';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};
type FormValues = {
  name: string;
};

const CreateNewPlayerStep1 = ({ name, setName, onNext }: Props & StepProps) => {
  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      name,
    },
  });

  const onSubmit = (values: FormValues) => {
    setName(values.name);
    onNext && onNext();
  };

  return (
    <FormModule onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => {
          return (
            <FormInput
              id={field.name}
              type="text"
              label={'Scegli un nome'}
              value={field.value}
              placeholder={`tipo Pippo Franco`}
              onChange={field.onChange}
            />
          );
        }}
      />
    </FormModule>
  );
};

export default CreateNewPlayerStep1;
