/** @format */

import { Dispatch, SetStateAction, useMemo } from 'react';
import { StepProps } from '../../../../../../types';
import { Controller, useForm } from 'react-hook-form';
import FormModule from '../../../../../common/FormModule';
import FormLabel from '../../../../../common/FormLabel';
import ButtonColorCoin from './ButtonColorCoin';
import { useAppSelector } from '../../../../../../hooks/useStore';
import { coinColorsList } from '../../../../../../utils/tailwindColors';

type Props = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
};
type FormValues = {
  color: string;
};

const CreateNewPlayerStep2 = ({ color, setColor, onNext, onPrev }: Props & StepProps) => {
  const players = useAppSelector(s => s.playerDataReducer.createdPlayersList);
  const availableColors = useMemo(() => {
    return coinColorsList.map(baseColor => {
      return {
        color: baseColor,
        disabled: !!players.find(({ color }) => color === baseColor),
      };
    });
  }, [players]);

  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      color,
    },
  });

  const onSubmit = (values: FormValues) => {
    setColor(values.color);
    onNext && onNext();
  };

  const onReset = () => {
    setColor('');
    onPrev && onPrev();
  };

  return (
    <FormModule onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <Controller
        name="color"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }) => {
          return (
            <>
              <FormLabel className={'mb-2'}>Scegli il colore</FormLabel>
              <div className="flex flex-wrap">
                {availableColors.map(c => (
                  <ButtonColorCoin
                    key={c.color}
                    color={c.color}
                    disabled={c.disabled}
                    active={c.color === field.value}
                    onClick={() => field.onChange(c.color === field.value ? '' : c.color)}
                  />
                ))}
              </div>
            </>
          );
        }}
      />
    </FormModule>
  );
};

export default CreateNewPlayerStep2;
