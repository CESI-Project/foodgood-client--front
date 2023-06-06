import { useQuery } from 'react-query';
import { getFoods } from '../../services/Food.service';

export const useFood = (restaurantId?: string) => {
	const { data } = useQuery(['food', restaurantId], () => getFoods(restaurantId), { enabled: !!restaurantId });

	return { foods: data };
};
