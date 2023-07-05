import './FollowOrder.component.scss';
import type { Order } from '../../cores/models/Order';

export const FollowOrderComponent = ({ status }: Order) => (
	<div className='follow-order'>
		<h2>
			Votre Commande est : <span className='follow-order__status'>{status}</span>
		</h2>
	</div>
);
