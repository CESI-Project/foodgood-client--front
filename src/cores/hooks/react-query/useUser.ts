import { useMutation } from 'react-query';
import { postLogin, postRegister } from '../../services/User.service';

export const useLogin = () => useMutation('login', postLogin);

export const useRegister = () => useMutation('register', postRegister);

export const useGetUser = (id?: string) => {
	const { data } = useQuery(['user', id], () => getUser(id), { enabled: !!id });

	return { user: data };
};

export const usePutUser = () => useMutation('putUser', putUser);
