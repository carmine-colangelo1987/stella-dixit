/** @format */

import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { setNewMatchExpectedUsers } from '../../../../store/slices/matchData';
import FormModule from '../../../common/FormModule';
import RadioSelect from '../../../common/RadioSelect';
import { TOption, StepProps } from '../../../../types';

type FormValues = {
  expectedUsers: number;
};
const userOptions: Array<TOption<number>> = Array.from({ length: 15 }, (_, i) => ({
  id: 'users' + i,
  value: 2 + i,
}));

const NewMatchStep2 = ({ onNext, onPrev }: StepProps) => {
  const dispatch = useAppDispatch();
  const expectedUsers = useAppSelector(s => s.matchDataReducer.newMatchData?.expected_users);

  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      expectedUsers,
    },
  });

  const onSubmit = (values: FormValues) => {
    dispatch(setNewMatchExpectedUsers(values.expectedUsers));
    onNext && onNext();
  };

  const onGoBack = () => {
    onPrev && onPrev();
  };

  return (
    <FormModule onSubmit={handleSubmit(onSubmit)} onReset={onGoBack}>
      <Controller
        name="expectedUsers"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => {
          return (
            <RadioSelect<number>
              label="Numero di cacciatori di stelle"
              name={field.name}
              selected={field.value}
              options={userOptions}
              onChange={o => field.onChange(o.value)}
            />
          );
        }}
      />
    </FormModule>
  );
};

export default NewMatchStep2;
