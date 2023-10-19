/** @format */

import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import FormInput from '../../../common/FormInput';
import { useMemo } from 'react';
import { setNewMatchTitle } from '../../../../store/slices/matchData';
import FormModule from '../../../common/FormModule';
import { StepProps } from '../../../../types';

type FormValues = {
  matchTitle: string;
};

const NewMatchStep1 = ({ onNext }: StepProps) => {
  const dispatch = useAppDispatch();
  const matchTitle = useAppSelector(s => s.matchDataReducer.newMatchData?.matchTitle ?? '');

  const matchDay = useMemo(() => {
    return new Intl.DateTimeFormat('it-IT', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());
  }, []);

  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      matchTitle,
    },
  });

  const onSubmit = (values: FormValues) => {
    dispatch(setNewMatchTitle(values.matchTitle));
    onNext && onNext();
  };

  return (
    <FormModule onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="matchTitle"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => {
          return (
            <FormInput
              id="matchTitle"
              type="text"
              label={'Dai un titolo alla partita'}
              value={field.value}
              placeholder={`Partita del ${matchDay}`}
              onChange={field.onChange}
            />
          );
        }}
      />
    </FormModule>
  );
};

export default NewMatchStep1;
