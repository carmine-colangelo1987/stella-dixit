/** @format */

import { StepProps } from '../../../../../../types';
import { useForm } from 'react-hook-form';
import FormModule from '../../../../../common/FormModule';
import { useAppDispatch } from '../../../../../../hooks/useStore';
import PlayerCard from '../../../../../common/PlayerCard';
import { addNewUser } from '../../../../../../store/slices/playerData';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, setMatchConfigRoute } from '../../../../../../router/routes';
import { useMatchId } from '../../../../../../hooks/useMatchId';

type FormValues = {
  name: string;
  color: string;
};

const CreateNewPlayerStep3 = ({ name, color, onPrev }: FormValues & StepProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const matchId = useMatchId();

  const { handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      name,
      color,
    },
  });

  const onSubmit = (values: FormValues) => {
    dispatch(addNewUser(values));
    navigate(setMatchConfigRoute(matchId, AppRoutes.CREATE_PLAYERS));
  };

  return (
    <FormModule onSubmit={handleSubmit(onSubmit)} onReset={onPrev} submitLabel={'Conferma'}>
      <div className="min-w-[250px]">
        <p>Confermi?</p>
        <PlayerCard name={name} color={color} />
      </div>
    </FormModule>
  );
};

export default CreateNewPlayerStep3;
