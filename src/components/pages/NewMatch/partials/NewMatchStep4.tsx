/** @format */

import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import FormModule from '../../../common/FormModule';
import { CreationMatchData, StepProps } from '../../../../types';
import { setMatchRoute } from '../../../../router/routes';
import { useNavigate } from 'react-router-dom';
import { useCreateNewMatchMutation } from '../../../../store/api/match';
import { useEffect } from 'react';
import { resetRoundData } from '../../../../store/slices/roundData';
import { resetPlayerData } from '../../../../store/slices/playerData';

type FormValues = CreationMatchData;

const NewMatchStep4 = ({ onPrev }: StepProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const newMatchData = useAppSelector(s => s.matchDataReducer.newMatchData);
  const [createNewMatchHandle, { data }] = useCreateNewMatchMutation();

  const { handleSubmit, watch } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: newMatchData,
  });

  const onSubmit = (values: FormValues) => {
    createNewMatchHandle({
      title: values.matchTitle,
      expected_users: values.expected_users,
      total_rounds: values.total_rounds,
    });
  };

  useEffect(() => {
    const matchId = data?.data;
    if (matchId) {
      dispatch(resetPlayerData());
      dispatch(resetRoundData());
      navigate(setMatchRoute(matchId));
    }
  }, [data?.data]);

  const matchTitle = watch('matchTitle');
  const expectedUsers = watch('expected_users');
  const totalRounds = watch('total_rounds');

  const onGoBack = () => {
    onPrev && onPrev();
  };

  return (
    <FormModule onSubmit={handleSubmit(onSubmit)} onReset={onGoBack} submitLabel="Conferma">
      <p className="mb-4">Confermi queste informazioni?</p>
      <dl>
        <dt>Titolo della partita:</dt>
        <dd className="text-xl font-bold text-primary">{matchTitle}</dd>
        <dt>Numero di cacciatori (giocatori):</dt>
        <dd className="text-xl font-bold text-primary">{expectedUsers}</dd>
        <dt>Numero di turni previsti:</dt>
        <dd className="text-xl font-bold text-primary">{totalRounds}</dd>
      </dl>
    </FormModule>
  );
};

export default NewMatchStep4;
