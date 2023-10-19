/** @format */

import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { setNewMatchTotalRounds } from '../../../../store/slices/matchData';
import FormModule from '../../../common/FormModule';
import RadioSelect from '../../../common/RadioSelect';
import { StepProps, TOption } from '../../../../types';

type FormValues = {
  totalRounds: number;
};

const roundOptions: Array<TOption<number>> = Array.from({ length: 5 }, (_, i) => ({
  id: 'rounds_' + i,
  value: 4 + i * 2,
}));

const NewMatchStep3 = ({ onNext, onPrev }: StepProps) => {
  const dispatch = useAppDispatch();
  const totalRounds = useAppSelector(s => s.matchDataReducer.newMatchData?.total_rounds);

  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      totalRounds,
    },
  });

  const onSubmit = (values: FormValues) => {
    dispatch(setNewMatchTotalRounds(values.totalRounds));
    onNext && onNext();
  };

  const onGoBack = () => {
    onPrev && onPrev();
  };

  return (
    <FormModule onSubmit={handleSubmit(onSubmit)} onReset={onGoBack}>
      <Controller
        name="totalRounds"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => {
          return (
            <RadioSelect<number>
              label="Numero di turni"
              name={field.name}
              selected={field.value}
              options={roundOptions}
              onChange={o => field.onChange(o.value)}
            />
          );
        }}
      />
    </FormModule>
  );
};

export default NewMatchStep3;
