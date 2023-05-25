import { useMutation } from 'react-query';
import { postLogin } from '../../services/User.service';

export const useLogin = () => useMutation('login', postLogin);
