import { useQuery } from 'react-query';
import { getMeals } from '../../services/Meal.service';

export const useMeal = (restaurantId?: string) => {
	const { data } = useQuery(['meal', restaurantId], () => getMeals(restaurantId), { enabled: !!restaurantId });

	return { meals: data };
};
